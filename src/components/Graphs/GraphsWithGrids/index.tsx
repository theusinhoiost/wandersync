import { Responsive, WidthProvider } from "react-grid-layout";
import SpendsByCategory from "../SpendsByCategory/SpendsByCategory";

import { useId } from "react";
import SpendsByDay from "../SpendsByDay/SpendsDay";
import SpendsByMember from "../SpendsByMember/SpendsByMember";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function GraphsWithGrids() {
  const id = useId(); // FIX LATER - JUST TEST
  const charts = [
    <SpendsByCategory key={id} />,
    <SpendsByCategory key={id} />,
    <SpendsByCategory key={id} />,
    <SpendsByDay key={id} />,
    <SpendsByMember key={id} />,
  ];

  return (
    <div>
      <ResponsiveGridLayout
        className="layout"
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={50}
        isResizable
        isDraggable
      >
        {charts.map((chart, index) => {
          const col = index % 3;
          const row = Math.floor(index / 3);

          return (
            <div
              key={index}
              data-grid={{
                x: col * 4,
                y: row * 6,
                w: 4,
                h: 6,
                minH: 6,
                minW: 4,
              }}
            >
              {chart}
            </div>
          );
        })}
      </ResponsiveGridLayout>
    </div>
  );
}
