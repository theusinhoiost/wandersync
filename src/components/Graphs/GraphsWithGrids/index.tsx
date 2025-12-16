"use client";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import { Responsive, WidthProvider } from "react-grid-layout";
import SpendsByCategory from "../SpendsByCategory/SpendsByCategory";
import SpendsByDay from "../SpendsByDay/SpendsDay";
import SpendsByMember from "../SpendsByMember/SpendsByMember";
import { toast } from "react-toastify";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function GraphsWithGrids({ tripId }: { tripId: string }) {
  const charts = [
    <SpendsByCategory tripId={tripId} key="cat1" />,
    <SpendsByCategory tripId={tripId} key="cat2" />,
    <SpendsByCategory tripId={tripId} key="cat3" />,
    <SpendsByDay tripId={tripId} key="day" />,
    <SpendsByMember tripId={tripId} key="member" />,
    <SpendsByDay tripId={tripId} key="day" />,
    <SpendsByDay tripId={tripId} key="day" />,
    <SpendsByDay tripId={tripId} key="day" />,
    <SpendsByMember tripId={tripId} key="member" />,
  ];

  const handleLayoutChange = () => {
    toast.dismiss();
    toast.info("Layout atualizado com sucesso ✅ ", { autoClose: 1000 });
  };

  return (
    <div className="w-full">
      <ResponsiveGridLayout
        className="layout"
        cols={{ lg: 12, md: 8, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={50}
        isResizable
        isDraggable
        isBounded={true}
        resizeHandles={["se", "sw"]}
        onLayoutChange={handleLayoutChange}
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
