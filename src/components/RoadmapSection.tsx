import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { BookOpen, Code, Layers, Terminal, GraduationCap, Wrench } from 'lucide-react';

interface RoadmapSectionProps {
  visibleSections?: {
    roadmap?: boolean;
  };
}

const RoadmapSection = ({ visibleSections }: RoadmapSectionProps) => {
  return (
    <section id="roadmap" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${visibleSections?.roadmap ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="heading-lg mb-4">Roadmaps for Different Domains in VLSI Industry</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Here are detailed roadmaps for key domains in the VLSI industry, including RTL Design, 
            Verification, Physical Design, and FPGA Development. Each roadmap outlines foundational topics, 
            tools, and learning strategies to build expertise.
          </p>
          <Separator className="mt-8 mb-8 max-w-md mx-auto" />
        </div>

        <div className={`transition-all duration-700 ${visibleSections?.roadmap ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            <AccordionItem value="rtl-design">
              <AccordionTrigger className="text-xl font-semibold">
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  <span>1. RTL Design (Register Transfer Level Design)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-4">RTL design involves creating digital circuits using hardware description languages like Verilog or VHDL.</p>
                    
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" /> What to Study
                    </h4>
                    <div className="ml-6 mb-4">
                      <p className="font-semibold">Foundational Topics:</p>
                      <ul className="list-disc ml-6 mb-2">
                        <li>Digital Electronics: Boolean algebra, logic gates, combinational/sequential circuits.</li>
                        <li>CMOS Basics: Transistor-level design and logic families.</li>
                        <li>Verilog/VHDL: Syntax, modules, testbenches, and simulation.</li>
                      </ul>
                      
                      <p className="font-semibold">Advanced Topics:</p>
                      <ul className="list-disc ml-6">
                        <li>Static Timing Analysis (STA): Understanding timing constraints and delays.</li>
                        <li>Low-power Design Techniques: Clock gating, power gating.</li>
                        <li>Synthesis: RTL-to-Gate level conversion.</li>
                      </ul>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-primary" /> How to Study
                    </h4>
                    <div className="ml-6">
                      <p className="font-semibold">Courses:</p>
                      <ul className="list-disc ml-6 mb-2">
                        <li>Online platforms like Udemy, Coursera (e.g., "Digital Design using Verilog").</li>
                        <li>Specialized VLSI training institutes like Cranes Varsity or ChipEdge.</li>
                      </ul>
                      
                      <p className="font-semibold">Tools:</p>
                      <ul className="list-disc ml-6 mb-2">
                        <li>Cadence Genus, Synopsys Design Compiler for synthesis.</li>
                        <li>Simulation tools like ModelSim or Xilinx Vivado.</li>
                      </ul>
                      
                      <p className="font-semibold">Projects:</p>
                      <ul className="list-disc ml-6">
                        <li>Design a simple ALU or FSM (Finite State Machine).</li>
                        <li>Implement low-power techniques in a digital circuit.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="verification">
              <AccordionTrigger className="text-xl font-semibold">
                <div className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-primary" />
                  <span>2. Verification (ASIC/FPGA Verification)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-4">Verification ensures that the design functions as intended before fabrication.</p>
                    
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" /> What to Study
                    </h4>
                    <div className="ml-6 mb-4">
                      <p className="font-semibold">Foundational Topics:</p>
                      <ul className="list-disc ml-6 mb-2">
                        <li>Digital Logic Design: Familiarity with circuit behavior and testing.</li>
                        <li>Verilog/SystemVerilog: Focus on verification constructs like assertions.</li>
                      </ul>
                      
                      <p className="font-semibold">Advanced Topics:</p>
                      <ul className="list-disc ml-6">
                        <li>UVM (Universal Verification Methodology): Standardized verification framework.</li>
                        <li>Coverage Metrics: Functional coverage and code coverage.</li>
                        <li>Debugging Techniques: Waveform analysis using tools like GTKWave.</li>
                      </ul>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-primary" /> How to Study
                    </h4>
                    <div className="ml-6">
                      <p className="font-semibold">Courses:</p>
                      <ul className="list-disc ml-6 mb-2">
                        <li>Learn UVM methodology through platforms like ChipEdge or Maven Silicon.</li>
                      </ul>
                      
                      <p className="font-semibold">Tools:</p>
                      <ul className="list-disc ml-6 mb-2">
                        <li>Simulation tools: Mentor Graphics QuestaSim, Synopsys VCS.</li>
                        <li>Coverage analysis tools: Cadence Incisive Enterprise Simulator.</li>
                      </ul>
                      
                      <p className="font-semibold">Projects:</p>
                      <ul className="list-disc ml-6">
                        <li>Build a testbench for a UART or SPI protocol.</li>
                        <li>Implement constrained random verification for a simple design.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="physical-design">
              <AccordionTrigger className="text-xl font-semibold">
                <div className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  <span>3. Physical Design (Backend Design)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-4">Physical design involves transforming gate-level netlists into layouts for fabrication.</p>
                    
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" /> What to Study
                    </h4>
                    <div className="ml-6 mb-4">
                      <p className="font-semibold">Foundational Topics:</p>
                      <ul className="list-disc ml-6 mb-2">
                        <li>CMOS Circuit Design: Understanding layout rules and transistor behavior.</li>
                        <li>STA (Static Timing Analysis): Timing closure techniques.</li>
                      </ul>
                      
                      <p className="font-semibold">Advanced Topics:</p>
                      <ul className="list-disc ml-6">
                        <li>Floorplanning, Placement, Routing: Optimizing chip area and power consumption.</li>
                        <li>Power Integrity Analysis: IR drop analysis and EM checks.</li>
                        <li>DRC/LVS Checks: Ensuring design rule compliance.</li>
                      </ul>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-primary" /> How to Study
                    </h4>
                    <div className="ml-6">
                      <p className="font-semibold">Courses:</p>
                      <ul className="list-disc ml-6 mb-2">
                        <li>Physical design courses from institutes like VLSI Expert or Cadence Training Academy.</li>
                      </ul>
                      
                      <p className="font-semibold">Tools:</p>
                      <ul className="list-disc ml-6 mb-2">
                        <li>Cadence Innovus, Synopsys ICC2 for physical implementation.</li>
                        <li>Signoff tools like PrimeTime or RedHawk for power analysis.</li>
                      </ul>
                      
                      <p className="font-semibold">Projects:</p>
                      <ul className="list-disc ml-6">
                        <li>Create layouts for basic circuits like inverters or multiplexers.</li>
                        <li>Perform timing closure for a small design block.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="fpga-development">
              <AccordionTrigger className="text-xl font-semibold">
                <div className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  <span>4. FPGA Development</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-4">FPGA development involves programming reconfigurable hardware for specific applications.</p>
                    
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" /> What to Study
                    </h4>
                    <div className="ml-6 mb-4">
                      <p className="font-semibold">Foundational Topics:</p>
                      <ul className="list-disc ml-6 mb-2">
                        <li>FPGA Architecture: LUTs, flip-flops, routing resources.</li>
                        <li>HDL Programming: Verilog/VHDL basics tailored for FPGA designs.</li>
                      </ul>
                      
                      <p className="font-semibold">Advanced Topics:</p>
                      <ul className="list-disc ml-6">
                        <li>IP Integration: Using pre-designed cores for communication protocols (e.g., UART).</li>
                        <li>Optimization Techniques: Resource utilization and timing constraints.</li>
                      </ul>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-primary" /> How to Study
                    </h4>
                    <div className="ml-6">
                      <p className="font-semibold">Courses:</p>
                      <ul className="list-disc ml-6 mb-2">
                        <li>Xilinx or Intel FPGA training programs (e.g., "Designing with Vivado").</li>
                      </ul>
                      
                      <p className="font-semibold">Tools:</p>
                      <ul className="list-disc ml-6 mb-2">
                        <li>Xilinx Vivado/ISE, Intel Quartus Prime for synthesis and implementation.</li>
                      </ul>
                      
                      <p className="font-semibold">Projects:</p>
                      <ul className="list-disc ml-6">
                        <li>Implement real-time signal processing applications using DSP blocks in FPGAs.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="mt-12 bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto">
            <h3 className="heading-sm mb-4">General Tips Across Domains</h3>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Start with foundational topics before diving into advanced concepts.</li>
              <li>Use industry-standard tools to gain hands-on experience.</li>
              <li>Build a portfolio of projects showcasing your expertise in specific domains.</li>
              <li>Stay updated with trends like AI integration, low-power design techniques, and emerging technologies such as quantum computing.</li>
            </ol>
            <p className="mt-4 text-muted-foreground">
              By following these roadmaps and leveraging available resources, you can build a strong career in the rapidly evolving VLSI industry!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
