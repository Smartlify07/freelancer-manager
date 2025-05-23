import { useFinance } from '@/hooks/useFinance';
import { IncomeCard } from '../cards/income-card';

export const IncomesOverview = () => {
  const { incomes } = useFinance();
  return (
    <section className="font-inter rounded-lg w-full md:w-6/12 flex flex-col gap-1 py-2">
      <header>
        <h1 className="font-semibold text-lg">Incomes Overview</h1>
      </header>

      <div className="flex flex-col">
        {incomes?.map((income) => (
          <IncomeCard key={income.id} income={income} />
        ))}
      </div>
    </section>
  );
};
