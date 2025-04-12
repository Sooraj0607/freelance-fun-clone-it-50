
import React, { useState } from 'react';
import { Accordion } from '@/components/ui/accordion';
import RoadmapAccordionItem from '@/components/roadmap/RoadmapAccordionItem';
import RoadmapTips from '@/components/roadmap/RoadmapTips';
import { Code2, Server, Cpu, Layers, ArrowRight } from 'lucide-react';

interface RoadmapSectionProps {
  visibleSections: {
    categories?: boolean;
    jobs?: boolean;
    howItWorks?: boolean;
    talent?: boolean;
    benefits?: boolean;
    roadmap?: boolean;
  };
}

const RoadmapSection: React.FC<RoadmapSectionProps> = ({ visibleSections }) => {
  const [activeSection, setActiveSection] = useState<string>("rtl");
  
  const generalTips = [
    "Start with the fundamentals before diving into specialized domains",
    "Practice with open-source EDA tools before investing in commercial ones",
    "Join semiconductor communities on Reddit, Stack Exchange, and LinkedIn",
    "Contribute to open-source hardware projects to build your portfolio",
    "Stay updated with industry standards and new process technologies"
  ];

  return (
    <section 
      id="roadmap" 
      className={`py-20 px-4 transition-all duration-1000 ${
        visibleSections.roadmap ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
      }`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Semiconductor Career Roadmap</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Navigate your path in the semiconductor industry with our comprehensive career roadmaps for different domains.
          </p>
        </div>

        {/* Flowchart navigation */}
        <div className="mb-10 overflow-x-auto">
          <div className="min-w-fit flex justify-center items-center space-x-3 p-4">
            {/* RTL Design */}
            <div 
              onClick={() => setActiveSection("rtl")} 
              className={`flowchart-box ${activeSection === "rtl" ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'} 
                cursor-pointer p-5 rounded-lg flex flex-col items-center w-40 h-40 justify-center transition-colors`}
            >
              <Code2 size={30} className={activeSection === "rtl" ? "text-white" : "text-primary"} />
              <span className="mt-2 font-medium text-center">RTL Design</span>
              <span className="text-xs text-center mt-1">{activeSection === "rtl" ? "Active" : "Click to view"}</span>
            </div>
            
            <ArrowRight className="text-gray-400" size={24} />
            
            {/* Verification */}
            <div 
              onClick={() => setActiveSection("verification")} 
              className={`flowchart-box ${activeSection === "verification" ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'} 
                cursor-pointer p-5 rounded-lg flex flex-col items-center w-40 h-40 justify-center transition-colors`}
            >
              <Server size={30} className={activeSection === "verification" ? "text-white" : "text-primary"} />
              <span className="mt-2 font-medium text-center">Verification</span>
              <span className="text-xs text-center mt-1">{activeSection === "verification" ? "Active" : "Click to view"}</span>
            </div>
            
            <ArrowRight className="text-gray-400" size={24} />
            
            {/* Physical Design */}
            <div 
              onClick={() => setActiveSection("physical")} 
              className={`flowchart-box ${activeSection === "physical" ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'} 
                cursor-pointer p-5 rounded-lg flex flex-col items-center w-40 h-40 justify-center transition-colors`}
            >
              <Cpu size={30} className={activeSection === "physical" ? "text-white" : "text-primary"} />
              <span className="mt-2 font-medium text-center">Physical Design</span>
              <span className="text-xs text-center mt-1">{activeSection === "physical" ? "Active" : "Click to view"}</span>
            </div>
            
            <ArrowRight className="text-gray-400" size={24} />
            
            {/* FPGA Development */}
            <div 
              onClick={() => setActiveSection("fpga")} 
              className={`flowchart-box ${activeSection === "fpga" ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'} 
                cursor-pointer p-5 rounded-lg flex flex-col items-center w-40 h-40 justify-center transition-colors`}
            >
              <Layers size={30} className={activeSection === "fpga" ? "text-white" : "text-primary"} />
              <span className="mt-2 font-medium text-center">FPGA Development</span>
              <span className="text-xs text-center mt-1">{activeSection === "fpga" ? "Active" : "Click to view"}</span>
            </div>
          </div>
        </div>

        {/* Content based on selected roadmap */}
        <div className="transition-all duration-500 ease-in-out">
          <Accordion type="single" collapsible defaultValue={activeSection} value={activeSection} onValueChange={setActiveSection}>
            <RoadmapAccordionItem
              value="rtl"
              title="RTL Design"
              description="Digital logic implementation using hardware description languages"
              icon={<Code2 className="h-5 w-5 text-primary" />}
              foundationalTopics={[
                "Digital Logic Fundamentals",
                "HDL Languages (Verilog/VHDL)",
                "Sequential & Combinational Circuits",
                "Finite State Machines",
                "Timing Analysis Basics"
              ]}
              advancedTopics={[
                "Advanced RTL Optimization",
                "Clock Domain Crossing",
                "Low Power Design Techniques",
                "High-Speed Interface Design",
                "Design for Testability"
              ]}
              courses={[
                "Digital Design and Computer Architecture (ETH Zurich)",
                "Hardware Description Languages for FPGA Design (Coursera)",
                "Verilog HDL: Fast Track to Verilog Design (Udemy)",
                "SystemVerilog for Design and Verification (Verific)"
              ]}
              tools={[
                "Xilinx Vivado",
                "Intel Quartus Prime",
                "Synopsys Design Compiler",
                "Cadence Genus",
                "Siemens EDA ModelSim"
              ]}
              projects={[
                "CPU Design (RISC Architecture)",
                "UART/SPI/I2C Communication Protocols",
                "Digital Filter Implementation",
                "Video Processing Pipeline",
                "Cryptographic Hardware Accelerator"
              ]}
            />
            
            <RoadmapAccordionItem
              value="verification"
              title="Verification"
              description="Ensuring RTL designs meet functional specifications"
              icon={<Server className="h-5 w-5 text-primary" />}
              foundationalTopics={[
                "Verification Methodologies (UVM)",
                "Testbench Architecture",
                "Assertion-Based Verification",
                "Functional Coverage",
                "Simulation Basics"
              ]}
              advancedTopics={[
                "Constrained Random Verification",
                "Coverage-Driven Verification",
                "Formal Verification Methods",
                "Hardware Acceleration",
                "Emulation Techniques"
              ]}
              courses={[
                "SystemVerilog Verification (Verification Academy)",
                "UVM Basics to Advanced (Doulos)",
                "Formal Verification Techniques (Cadence)",
                "Assertion-Based Verification (Synopsys)"
              ]}
              tools={[
                "Synopsys VCS",
                "Cadence Xcelium",
                "Siemens EDA Questa",
                "Synopsys VC Formal",
                "Cadence JasperGold"
              ]}
              projects={[
                "Memory Controller Verification",
                "Bus Protocol Verification",
                "Custom UVM Environment",
                "Processor Verification",
                "Mixed-Signal Verification Project"
              ]}
            />
            
            <RoadmapAccordionItem
              value="physical"
              title="Physical Design"
              description="Transforming RTL into manufacturable layout"
              icon={<Cpu className="h-5 w-5 text-primary" />}
              foundationalTopics={[
                "Floorplanning Fundamentals",
                "Placement & Routing",
                "Clock Tree Synthesis",
                "Static Timing Analysis",
                "Design Rule Checks"
              ]}
              advancedTopics={[
                "Power Analysis and Optimization",
                "Signal Integrity",
                "FinFET Design Considerations",
                "Advanced Node Techniques",
                "IR Drop Analysis"
              ]}
              courses={[
                "VLSI Physical Design (NPTEL)",
                "Advanced Physical Design (Cadence Learning)",
                "Timing Closure in Modern SoCs (Synopsys)",
                "Physical Verification with IC Validator (Synopsys)"
              ]}
              tools={[
                "Cadence Innovus",
                "Synopsys ICC2",
                "Cadence Tempus",
                "Synopsys PrimeTime",
                "Siemens Calibre"
              ]}
              projects={[
                "Standard Cell Library Development",
                "Clock Distribution Network Design",
                "Low Power SoC Implementation",
                "Mixed-Signal Layout",
                "Advanced Node Tapeout Project"
              ]}
            />
            
            <RoadmapAccordionItem
              value="fpga"
              title="FPGA Development"
              description="Programmable hardware implementation and optimization"
              icon={<Layers className="h-5 w-5 text-primary" />}
              foundationalTopics={[
                "FPGA Architecture",
                "Hardware Description Languages",
                "FPGA Design Flow",
                "Timing Constraints",
                "Resource Utilization"
              ]}
              advancedTopics={[
                "High-Level Synthesis",
                "Embedded Processor Integration",
                "DSP Implementations",
                "High-Speed Interfaces (PCIe, DDR)",
                "Partial Reconfiguration"
              ]}
              courses={[
                "FPGA Design for Embedded Systems (Coursera)",
                "High-Level Synthesis with Vitis HLS (Xilinx)",
                "Intel FPGA Development (Intel Learning)",
                "Advanced FPGA Design (Doulos)"
              ]}
              tools={[
                "Xilinx Vivado",
                "Intel Quartus Prime",
                "AMD Vitis",
                "Intel OneAPI",
                "Lattice Diamond"
              ]}
              projects={[
                "Video Processing Accelerator",
                "Software Defined Radio",
                "Neural Network Implementation",
                "High-Performance Computing Application",
                "IoT Gateway with FPGA"
              ]}
            />
          </Accordion>
        </div>

        <RoadmapTips tips={generalTips} />
      </div>
    </section>
  );
};

export default RoadmapSection;
