class Plan < ActiveRecord::Base

  def intitialize
    # assumptions go here
    load_assumptions


  end

  def refresh
    # iterate from start year(today) to end year(expected life expectancy year)
      # add income for year
      # subtract expenses for year
      # add returns for year
      # calc taxes for year
    # returns array of each year's income/expenses/investment returns
    # show net surplus or shortfall

    # regular deposits formula
    P = M * ( ( ( 1 + ( i / q ) ) ** ( n * q ) ) - 1 ) * ( q / i )
    deposit_per_period = ( interest_rate * goal_amount ) / ( periods_per_year * ( ( ( 1 + ( interest_rate / periods_per_year ) ) ** ( years * periods_per_year ) ) - 1 ) )

    example_goal = {
      goal_name: 'vacation',
      goal_date: @start_date.beginning_of_month + 6.months,
      goal_amount: 5000
      }
    }

    @goal ||= example_goal

    if @goal_date && @goal

      plan = {}
      savings = 0 # will need to set this later to calculate current net worth

      plan['title'] = "Saving #{@goal['goal_amount']} for #{user_name}'s #{@goal['goal_name']} on #{@goal['goal_date']}"

      plan['goal'] = @goal

      plan_date = @start_date.beginning_of_month

      while plan_date < @goal_date do

        plan['data']['plan_date']['savings'] =

        savings +=

        plan_date += 1.month

      end
      (@start_date...@goal_date).each do |current_month|
        planned_year = {}

        planned_year['year'] = current_year.year
        planned_year['income'] = income
        planned_year['expenses'] = calc_expenses #need this function
        planned_year['returns'] = calc_returns(assets) #need this function
        planned_year['taxes'] = calc_taxes(income) #need this function
        net_worth_change = calc_net_worth_change(planned_year) #need this function
        planned_year['net_worth_change'] = net_worth_change #need this function
        net_worth += net_worth_change
        planned_year['net_worth'] = net_worth




        income = dollars( ( income * ( 1 + @inflation_rate ) ) )

      end


  end

  def calc_end_year
    @end_year = @start_year + (@life_expectancy - @age).years
  end

  def calc_taxes(income)
    # this assumes a 30% tax rate
    dollars( income * 0.3 )
  end

  def calc_net_worth_change(planned_year)
    delta = 0
    delta += planned_year['income']
    delta -= planned_year['expenses']
    delta += planned_year['returns']
    delta -= planned_year['taxes']
  end

  def calc_expenses

  end

  def load_assumptions

    @start_date = Date.now
    # @age = 25
    # @goal_age = 65
    # @life_expectancy = 82
    # @annual_income = 37500
    @inflation_rate = 0.02
    @roi = {
      'conservative' => 0.03,
      'average' => 0.05,
      'risky' => 0.07,
    }

  end

  def dollars(amount)
    amount.to_f.round(2)
  end

end
