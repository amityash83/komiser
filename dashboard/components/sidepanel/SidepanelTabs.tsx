type SidepanelTabsProps = {
  goTo: (page: any) => void;
  page: string;
  tabs: string[];
};

function SidepanelTabs({ goTo, page, tabs }: SidepanelTabsProps) {
  return (
    <div className="border-black-150 border-b-2 text-center text-sm font-medium text-black-300">
      <ul className="-mb-[2px] flex justify-between sm:justify-start">
        {tabs.map((tab, idx) => (
          <li key={idx} className="mr-2">
            <a
              onClick={() => goTo(tab.toLowerCase())}
              className={`inline-block cursor-pointer select-none rounded-t-lg border-b-2 border-transparent py-4 px-2 hover:text-komiser-700 sm:p-4 
                     ${
                       page === tab.toLowerCase()
                         ? `border-komiser-600 text-komiser-600 hover:text-komiser-600`
                         : ''
                     }`}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidepanelTabs;
