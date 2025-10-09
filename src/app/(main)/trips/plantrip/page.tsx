"use client";

import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import SpendsDay from "@/components/graphs/SpendsByDay/SpendsDay";
import SpendsByCategory from "@/components/graphs/SpendsByCategory/SpendsByCategory";
import SpendsByMember from "@/components/graphs/SpendsByMember/SpendsByMember";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function planTrip() {
  return (
    <div>
      <div>
        <h1 className="text-center color-primary">
          Nessa página você vai poder criar a viagem do seu jeito e verificar
          as em andamento.
        </h1>
      </div>
      <div>
        <ResponsiveGridLayout
          className="layout"
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={50}
          isResizable
          isDraggable
        >
          {/* Pizza - gastos por categoria */}
          <div key="1" data-grid={{ x: 0, y: 0, w: 4, h: 6, minH: 6, minW: 4 }}>
            <SpendsByCategory />
          </div>

          {/* Linha - gastos por dia */}
          <div key="2" data-grid={{ x: 4, y: 0, w: 4, h: 6, minH: 6, minW: 4 }}>
            <SpendsDay />
          </div>

          {/* Barras - contribuição por membro */}
          <div key="3" data-grid={{ x: 8, y: 0, w: 4, h: 6, minH: 6, minW: 4 }}>
            <SpendsByMember />
          </div>
        </ResponsiveGridLayout>
      </div>
    </div>
  );
}
