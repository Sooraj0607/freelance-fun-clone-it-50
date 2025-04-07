
import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Cpu, Send, User, Bot, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: "👋 Hi there! I'm your VLSI Expert Assistant. Ask me anything about semiconductor design, verification, or industry trends!",
    sender: 'bot',
    timestamp: new Date(),
  },
];

const sampleResponses: Record<string, string> = {
  'rtl': 'RTL (Register Transfer Level) is a design abstraction used in hardware description languages like Verilog and VHDL. It represents the flow of digital signals between hardware registers and the logical operations performed on those signals.',
  'verilog': 'Verilog is a hardware description language (HDL) used to model electronic systems. It's most commonly used in the design and verification of digital circuits at the register-transfer level of abstraction.',
  'verification': 'Verification in semiconductor design is the process of ensuring that a design correctly implements its specification. Common methodologies include simulation, formal verification, and emulation.',
  'uvm': 'UVM (Universal Verification Methodology) is a standardized methodology for verifying integrated circuit designs. It's based on SystemVerilog and provides a framework for creating flexible, reusable verification components.',
  'asic': 'An ASIC (Application-Specific Integrated Circuit) is an integrated circuit customized for a particular use, rather than intended for general-purpose use. ASICs are typically optimized for power, performance, and area for their specific application.',
  'fpga': 'An FPGA (Field-Programmable Gate Array) is an integrated circuit designed to be configured by a customer or designer after manufacturing. FPGAs contain programmable logic blocks and a hierarchy of reconfigurable interconnects.',
  'physical design': 'Physical design in VLSI involves converting a logical design description (netlist) into a physical layout. Key steps include floorplanning, placement, clock tree synthesis, and routing.',
  'moore\'s law': 'Moore\'s Law is an observation made by Gordon Moore that the number of transistors on a microchip doubles approximately every two years, though the cost of computers is halved. This observation has largely held true since the 1970s, though it\'s showing signs of slowing down.',
  'static timing analysis': 'Static Timing Analysis (STA) is a method of validating the timing performance of a design by checking all possible paths for timing violations. It\'s performed without requiring simulation of the full design.',
  'systemverilog': 'SystemVerilog is a hardware description and verification language used to model, design, simulate, test, and implement electronic systems. It\'s an extension of Verilog with additional verification features.',
};

const VlsiChatbot = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (question: string): string => {
    // Normalize the question for keyword matching
    const lowerQuestion = question.toLowerCase();
    
    // Check for keywords in the sample responses
    for (const [keyword, response] of Object.entries(sampleResponses)) {
      if (lowerQuestion.includes(keyword.toLowerCase())) {
        return response;
      }
    }
    
    // Default response if no keywords matched
    return "I don't have specific information about that topic yet, but I'm continuously learning. Try asking about RTL, Verilog, ASIC, FPGA, UVM, verification, physical design, SystemVerilog, or Moore's Law.";
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response delay (0.5-1.5 seconds)
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(input),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, Math.random() * 1000 + 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages(initialMessages);
    toast({
      title: "Chat cleared",
      description: "Your conversation has been reset.",
    });
  };

  return (
    <Card className="flex flex-col h-[600px] overflow-hidden border border-gray-200 shadow-md">
      <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
        <div className="flex items-center">
          <div className="rounded-full bg-blue-100 p-2 mr-3">
            <Cpu className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-bold">VLSI Expert Assistant</h3>
            <p className="text-sm text-gray-500">Ask questions about semiconductor design & verification</p>
          </div>
          <Badge variant="outline" className="ml-auto bg-green-50 text-green-700 border-green-200">
            Online
          </Badge>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
              <Avatar className={`h-8 w-8 ${message.sender === 'user' ? 'ml-2 bg-blue-600' : 'mr-2 bg-indigo-600'}`}>
                {message.sender === 'user' ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
              </Avatar>
              
              <div 
                className={`rounded-lg p-3 ${
                  message.sender === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white border border-gray-200 shadow-sm rounded-tl-none'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="flex items-start max-w-[80%]">
              <Avatar className="h-8 w-8 mr-2 bg-indigo-600">
                <Bot className="h-5 w-5" />
              </Avatar>
              <div className="rounded-lg p-3 bg-white border border-gray-200 shadow-sm rounded-tl-none flex items-center">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={clearChat} 
            className="mr-2 text-gray-500 hover:text-gray-700"
            title="Clear chat"
          >
            <RefreshCw className="h-5 w-5" />
          </Button>
          <div className="flex-1 relative">
            <Input
              placeholder="Ask a question about semiconductors..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="pr-10 focus-visible:ring-blue-500"
            />
            <Button 
              size="icon" 
              onClick={handleSendMessage}
              disabled={!input.trim() || isLoading}
              className={`absolute right-1 top-1 h-8 w-8 p-1 ${!input.trim() ? 'text-gray-400' : 'text-blue-600'}`}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VlsiChatbot;
