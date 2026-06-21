interface ScheduleRow {
  facilityType: string;
  volume: string;
  frequency: string;
  note?: string;
}

const scheduleData: ScheduleRow[] = [
  {
    facilityType: "High-Volume Kitchen",
    volume: "≥12 hrs/day operation",
    frequency: "Monthly",
    note: "Fast food, 24-hr diners, high-output fryers",
  },
  {
    facilityType: "Moderate-Volume Kitchen",
    volume: "6–12 hrs/day",
    frequency: "Quarterly",
    note: "Full-service restaurants, cafeterias, hotels",
  },
  {
    facilityType: "Low-Volume Kitchen",
    volume: "≤6 hrs/day",
    frequency: "Semi-Annual",
    note: "Churches, seasonal venues, small cafés",
  },
  {
    facilityType: "Solid Fuel Cooking",
    volume: "Wood / charcoal / mesquite",
    frequency: "Monthly",
    note: "NFPA 96 mandates increased frequency for solid fuel",
  },
  {
    facilityType: "Wok / High-Grease Output",
    volume: "Any volume",
    frequency: "Monthly",
    note: "Asian cuisine, heavy fry operations",
  },
  {
    facilityType: "Grease Trap",
    volume: "High-volume",
    frequency: "Monthly",
    note: "Prevent FOG buildup; may vary by local code",
  },
  {
    facilityType: "Grease Trap",
    volume: "Moderate",
    frequency: "Quarterly",
    note: "Coordinate with kitchen cleaning schedule",
  },
  {
    facilityType: "Exterior / Lot Pressure Wash",
    volume: "Commercial property",
    frequency: "Quarterly–Annual",
    note: "Depends on foot traffic and HOA requirements",
  },
];

const frequencyColors: Record<string, string> = {
  Monthly: "text-[#d11a1a] border-[#d11a1a]/40 bg-[#d11a1a]/10",
  Quarterly: "text-orange-400 border-orange-400/40 bg-orange-400/10",
  "Semi-Annual": "text-yellow-400 border-yellow-400/40 bg-yellow-400/10",
  "Monthly–Quarterly": "text-[#d11a1a] border-[#d11a1a]/40 bg-[#d11a1a]/10",
  "Quarterly–Annual": "text-blue-400 border-blue-400/40 bg-blue-400/10",
};

function FrequencyBadge({ frequency }: { frequency: string }) {
  const cls = frequencyColors[frequency] ?? "text-gray-400 border-gray-400/40 bg-gray-400/10";
  return (
    <span className={`inline-block px-2 py-0.5 border text-xs font-black uppercase tracking-widest ${cls}`}>
      {frequency}
    </span>
  );
}

export default function ScheduleTable() {
  return (
    <div className="overflow-x-auto">
      {/* Desktop table */}
      <table className="hidden md:table w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-[#d11a1a]">
            <th className="text-left py-3 pr-6 text-gray-400 font-black uppercase tracking-widest text-xs">
              Facility Type
            </th>
            <th className="text-left py-3 pr-6 text-gray-400 font-black uppercase tracking-widest text-xs">
              Usage / Volume
            </th>
            <th className="text-left py-3 pr-6 text-gray-400 font-black uppercase tracking-widest text-xs">
              Frequency
            </th>
            <th className="text-left py-3 text-gray-400 font-black uppercase tracking-widest text-xs">
              Notes
            </th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((row, i) => (
            <tr
              key={i}
              className="border-b border-[#2a2a2a] hover:bg-[#1a1a1a] transition-colors duration-100"
            >
              <td className="py-4 pr-6 text-white font-bold">{row.facilityType}</td>
              <td className="py-4 pr-6 text-gray-400">{row.volume}</td>
              <td className="py-4 pr-6">
                <FrequencyBadge frequency={row.frequency} />
              </td>
              <td className="py-4 text-gray-500 text-xs">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile cards */}
      <div className="md:hidden flex flex-col gap-4">
        {scheduleData.map((row, i) => (
          <div key={i} className="border border-[#2a2a2a] p-4">
            <div className="flex items-start justify-between gap-4 mb-2">
              <span className="text-white font-bold text-sm">{row.facilityType}</span>
              <FrequencyBadge frequency={row.frequency} />
            </div>
            <p className="text-gray-400 text-xs mb-1">{row.volume}</p>
            {row.note && <p className="text-gray-500 text-xs">{row.note}</p>}
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-gray-500 italic">
        Frequencies are based on NFPA 96 guidelines. Actual intervals may be adjusted based on
        local authority having jurisdiction (AHJ) requirements. Contact us for a site-specific
        assessment.
      </p>
    </div>
  );
}
