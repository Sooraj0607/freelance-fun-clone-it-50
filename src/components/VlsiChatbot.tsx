
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface Message {
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const VlsiChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      content: "Hello! I'm your VLSI Expert assistant. How can I help you with semiconductor and chip design questions today?",
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sample VLSI questions and answers for demo purposes
  const vlsiResponses = [
    {
      keywords: ['verilog', 'hdl', 'hardware description'],
      response: "Verilog is a hardware description language (HDL) used to model electronic systems. It's one of the most common HDLs used in the design and verification of digital circuits at the register-transfer level of abstraction.",
    },
    {
      keywords: ['static timing', 'sta', 'timing analysis'],
      response: "Static Timing Analysis (STA) is a method of validating the timing performance of a design by checking all possible paths for timing violations. It's performed at multiple stages in the VLSI design flow to ensure the circuit meets timing constraints.",
    },
    {
      keywords: ['power consumption', 'low power', 'leakage'],
      response: "Power consumption in VLSI designs comes from dynamic power (switching activity), short-circuit power, and leakage power. Modern designs employ techniques like clock gating, power gating, and multi-threshold cells to reduce power consumption.",
    },
    {
      keywords: ['fpga', 'field programmable'],
      response: "Field-Programmable Gate Arrays (FPGAs) are semiconductor devices containing programmable logic blocks and interconnections. They're widely used for prototyping ASIC designs and implementing designs that may need future hardware updates.",
    },
    {
      keywords: ['physical design', 'layout', 'floorplan'],
      response: "Physical design in VLSI is the process of transforming a circuit description into the physical layout. Key steps include floorplanning, placement, clock tree synthesis, and routing.",
    },
    {
      keywords: ['synthesis', 'rtl synthesis'],
      response: "RTL synthesis transforms RTL description (in Verilog/VHDL) into a gate-level netlist. Modern synthesis tools optimize the design for area, power, and timing while preserving the functionality described in the RTL.",
    },
  ];

  const generateResponse = (query: string) => {
    // In a real implementation, this would call an AI API
    setIsLoading(true);
    
    setTimeout(() => {
      // Simple keyword matching for demo purposes
      const lowerQuery = query.toLowerCase();
      
      for (const item of vlsiResponses) {
        if (item.keywords.some(keyword => lowerQuery.includes(keyword))) {
          setMessages(prev => [...prev, {
            content: item.response,
            role: 'assistant',
            timestamp: new Date(),
          }]);
          setIsLoading(false);
          return;
        }
      }
      
      // Default response if no keywords match
      setMessages(prev => [...prev, {
        content: "That's an interesting question about VLSI! In a professional implementation, I would connect to an AI model that specializes in semiconductor knowledge. For now, please try asking about Verilog, timing analysis, power consumption, FPGAs, physical design, or synthesis.",
        role: 'assistant',
        timestamp: new Date(),
      }]);
      setIsLoading(false);
    }, 1000); // Simulate API delay
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      content: input,
      role: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    generateResponse(input);
    setInput('');
  };

  const handleReset = () => {
    setMessages([
      {
        content: "Chat reset. Hello! I'm your VLSI Expert assistant. How can I help you with semiconductor and chip design questions today?",
        role: 'assistant',
        timestamp: new Date(),
      },
    ]);
    toast.success('Chat has been reset');
  };

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Card className="flex flex-col h-[500px] border rounded-lg overflow-hidden">
      <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Bot size={20} />
          <h3 className="font-semibold">VLSI Expert Assistant</h3>
        </div>
        <Button variant="ghost" size="sm" onClick={handleReset} className="text-primary-foreground">
          <RefreshCw size={16} />
          <span className="ml-1">Reset</span>
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-white border shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                {message.role === 'user' ? (
                  <User size={16} />
                ) : (
                  <Bot size={16} />
                )}
                <span className="text-xs opacity-70">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="p-3 border-t bg-white flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about VLSI, semiconductor design..."
          disabled={isLoading}
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <span className="animate-spin">◌</span> : <Send size={16} />}
        </Button>
      </form>
    </Card>
  );
};

export default VlsiChatbot;
