
import { Card } from "@nextui-org/react";

interface EducationItem {
  institution: string;
  program: string;
  period: string;
}

const educationData: EducationItem[] = [
  {
    institution: "UTN - BA",
    program: "fullstack developer",
    period: "2020-2021"
  },
  {
    institution: "Coder house",
    program: "Web development",
    period: "2021-2022"
  },
  {
    institution: "UTN - Fra",
    program: "Tecnicatura universitaria programacion",
    period: "2023-2024"
  }
];

const Formacion = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-black p-8">
      <h2 className="text-4xl text-white mb-12 text-center tracking-[8px]">Formacion</h2>

      <div className="relative max-w-md mx-auto">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5">
          <div className="h-full bg-gradient-to-b from-cyan-500 to-cyan-500 "></div>
        </div>

        {/* Education items */}
        <div className="space-y-24">
          {educationData.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
                <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
              </div>

              {/* Card */}
              <Card className="w-64 p-4 bg-purple-800 text-white hover:bg-purple-700 transition-all duration-300 cursor-pointer mx-auto">
                <div className="text-center">
                  <h3 className="font-bold text-lg">{item.institution}</h3>
                  <p className="text-sm opacity-90">{item.program}</p>
                  <p className="text-xs opacity-75 mt-2">{item.period}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Formacion