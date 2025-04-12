
import React from 'react';
import { Cpu, Code, Database, HardDrive } from 'lucide-react';
import { Accordion } from '@/components/ui/accordion';
import RoadmapAccordionItem from './roadmap/RoadmapAccordionItem';
import RoadmapTips from './roadmap/RoadmapTips';

interface RoadmapSectionProps {
  visibleSections: {
    roadmap: boolean;
  };
}

const RoadmapSection = ({ visibleSections }: RoadmapSectionProps) => {
  const generalTips = [
    "Start with foundational topics before diving into advanced concepts.",
    "Use industry-standard tools to gain hands-on experience.",
    "Build a portfolio of projects showcasing your expertise in specific domains.",
    "Stay updated with trends like AI integration, low-power design techniques, and emerging technologies.",
    "Join semiconductor communities and participate in forums to learn from industry experts."
  ];

  const roadmapData = [
    {
      value: "rtl-design",
      title: "RTL Design",
      description: "Register Transfer Level Design involves creating digital circuits using hardware description languages.",
      icon: <Cpu className="h-5 w-5 text-primary" />,
      foundationalTopics: [
        "Digital Electronics: Boolean algebra, logic gates, combinational/sequential circuits",
        "CMOS Basics: Transistor-level design and logic families",
        "Verilog/VHDL: Syntax, modules, testbenches, and simulation"
      ],
      advancedTopics: [
        "Static Timing Analysis (STA): Understanding timing constraints and delays",
        "Low-power Design Techniques: Clock gating, power gating",
        "Synthesis: RTL-to-Gate level conversion"
      ],
      courses: [
        "Online platforms like Udemy, Coursera (e.g., 'Digital Design using Verilog')",
        "Specialized VLSI training institutes like Cranes Varsity or ChipEdge"
      ],
      tools: [
        "Cadence Genus, Synopsys Design Compiler for synthesis",
        "Simulation tools like ModelSim or Xilinx Vivado"
      ],
      projects: [
        "Design a simple ALU or FSM (Finite State Machine)",
        "Implement low-power techniques in a digital circuit"
      ]
    },
    {
      value: "verification",
      title: "Verification",
      description: "ASIC/FPGA Verification ensures that the design functions as intended before fabrication.",
      icon: <Code className="h-5 w-5 text-primary" />,
      foundationalTopics: [
        "Digital Logic Design: Familiarity with circuit behavior and testing",
        "Verilog/SystemVerilog: Focus on verification constructs like assertions"
      ],
      advancedTopics: [
        "UVM (Universal Verification Methodology): Standardized verification framework",
        "Coverage Metrics: Functional coverage and code coverage",
        "Debugging Techniques: Waveform analysis using tools like GTKWave"
      ],
      courses: [
        "Learn UVM methodology through platforms like ChipEdge or Maven Silicon"
      ],
      tools: [
        "Simulation tools: Mentor Graphics QuestaSim, Synopsys VCS",
        "Coverage analysis tools: Cadence Incisive Enterprise Simulator"
      ],
      projects: [
        "Build a testbench for a UART or SPI protocol",
        "Implement constrained random verification for a simple design"
      ]
    },
    {
      value: "physical-design",
      title: "Physical Design",
      description: "Backend Design involves transforming gate-level netlists into layouts for fabrication.",
      icon: <Database className="h-5 w-5 text-primary" />,
      foundationalTopics: [
        "CMOS Circuit Design: Understanding layout rules and transistor behavior",
        "STA (Static Timing Analysis): Timing closure techniques"
      ],
      advancedTopics: [
        "Floorplanning, Placement, Routing: Optimizing chip area and power consumption",
        "Power Integrity Analysis: IR drop analysis and EM checks",
        "DRC/LVS Checks: Ensuring design rule compliance"
      ],
      courses: [
        "Physical design courses from institutes like VLSI Expert or Cadence Training Academy"
      ],
      tools: [
        "Cadence Innovus, Synopsys ICC2 for physical implementation",
        "Signoff tools like PrimeTime or RedHawk for power analysis"
      ],
      projects: [
        "Create layouts for basic circuits like inverters or multiplexers",
        "Perform timing closure for a small design block"
      ]
    },
    {
      value: "fpga-development",
      title: "FPGA Development",
      description: "Programming reconfigurable hardware for specific applications.",
      icon: <HardDrive className="h-5 w-5 text-primary" />,
      foundationalTopics: [
        "FPGA Architecture: LUTs, flip-flops, routing resources",
        "HDL Programming: Verilog/VHDL basics tailored for FPGA designs"
      ],
      advancedTopics: [
        "IP Integration: Using pre-designed cores for communication protocols (e.g., UART)",
        "Optimization Techniques: Resource utilization and timing constraints"
      ],
      courses: [
        "Xilinx or Intel FPGA training programs (e.g., 'Designing with Vivado')"
      ],
      tools: [
        "Xilinx Vivado/ISE, Intel Quartus Prime for synthesis and implementation"
      ],
      projects: [
        "Implement real-time signal processing applications using DSP blocks in FPGAs"
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={`heading-lg text-center mb-12 transition-all duration-700 ${
          visibleSections.roadmap ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Roadmaps for Different Domains in VLSI Industry
        </h2>
        
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${
          visibleSections.roadmap ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-center text-gray-600 mb-8">
            Here are detailed roadmaps for key domains in the VLSI industry. Each roadmap outlines foundational topics, 
            tools, and learning strategies to build expertise.
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {roadmapData.map((roadmap) => (
              <RoadmapAccordionItem
                key={roadmap.value}
                value={roadmap.value}
                title={roadmap.title}
                description={roadmap.description}
                icon={roadmap.icon}
                foundationalTopics={roadmap.foundationalTopics}
                advancedTopics={roadmap.advancedTopics}
                courses={roadmap.courses}
                tools={roadmap.tools}
                projects={roadmap.projects}
              />
            ))}
          </Accordion>
          
          <RoadmapTips tips={generalTips} />
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
