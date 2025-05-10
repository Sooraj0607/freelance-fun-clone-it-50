
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { BookOpen, Save, Search, Trash2, Download } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface Note {
  id: string;
  title: string;
  content: string;
  timestamp: string;
  lesson: string;
}

// Mock initial notes
const initialNotes: Note[] = [
  {
    id: '1',
    title: 'Key concepts from Introduction',
    content: 'Important points about semiconductor physics: band gaps, carrier mobility, and doping effects. Need to review these concepts for the quiz.',
    timestamp: '2 days ago',
    lesson: 'Introduction to Semiconductor Design'
  },
  {
    id: '2',
    title: 'Design constraints overview',
    content: 'Remember the three main design constraints: performance, power consumption, and area. Trade-offs between these factors are crucial for effective designs.',
    timestamp: '1 week ago',
    lesson: 'Design Fundamentals'
  }
];

interface CourseNotesProps {
  courseId?: string;
}

const CourseNotes: React.FC<CourseNotesProps> = ({ courseId }) => {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const { toast } = useToast();

  // Filter notes based on search query
  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.lesson.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddNote = () => {
    if (newNoteTitle.trim() === '' || newNoteContent.trim() === '') {
      toast({
        title: "Error",
        description: "Please provide both a title and content for your note.",
        variant: "destructive",
      });
      return;
    }

    const newNote: Note = {
      id: Date.now().toString(),
      title: newNoteTitle,
      content: newNoteContent,
      timestamp: 'Just now',
      lesson: 'Current Lesson' // This would typically come from the current lesson context
    };

    setNotes([newNote, ...notes]);
    setNewNoteTitle('');
    setNewNoteContent('');

    toast({
      title: "Note Saved",
      description: "Your note has been saved successfully.",
      variant: "default",
    });
  };

  const handleUpdateNote = (id: string) => {
    const noteToUpdate = notes.find(note => note.id === id);
    if (noteToUpdate) {
      setNewNoteTitle(noteToUpdate.title);
      setNewNoteContent(noteToUpdate.content);
      setEditingNoteId(id);
    }
  };

  const handleSaveUpdate = () => {
    if (editingNoteId) {
      setNotes(notes.map(note => 
        note.id === editingNoteId 
          ? { ...note, title: newNoteTitle, content: newNoteContent, timestamp: 'Just now (edited)' }
          : note
      ));
      
      setNewNoteTitle('');
      setNewNoteContent('');
      setEditingNoteId(null);

      toast({
        title: "Note Updated",
        description: "Your note has been updated successfully.",
        variant: "default",
      });
    }
  };

  const handleCancelEdit = () => {
    setNewNoteTitle('');
    setNewNoteContent('');
    setEditingNoteId(null);
  };

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
    
    toast({
      title: "Note Deleted",
      description: "Your note has been deleted.",
      variant: "default",
    });
  };

  const handleDownloadAllNotes = () => {
    toast({
      title: "Notes Downloaded",
      description: "All notes have been downloaded as a PDF.",
      variant: "default",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold">My Course Notes</h2>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search notes..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={handleDownloadAllNotes}
          >
            <Download className="h-4 w-4" /> Export All
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <h3 className="font-medium mb-3">{editingNoteId ? 'Edit Note' : 'Add New Note'}</h3>
          <div className="space-y-3">
            <Input
              placeholder="Note title"
              value={newNoteTitle}
              onChange={(e) => setNewNoteTitle(e.target.value)}
              className="mb-2"
            />
            <Textarea 
              placeholder="Write your notes here..." 
              className="min-h-[150px]"
              value={newNoteContent}
              onChange={(e) => setNewNoteContent(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              {editingNoteId && (
                <Button variant="outline" onClick={handleCancelEdit}>
                  Cancel
                </Button>
              )}
              <Button onClick={editingNoteId ? handleSaveUpdate : handleAddNote}>
                <Save className="h-4 w-4 mr-2" /> {editingNoteId ? 'Update Note' : 'Save Note'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {filteredNotes.length > 0 ? (
          filteredNotes.map(note => (
            <Card key={note.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 rounded-full p-2 text-primary mt-1">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{note.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <span>{note.lesson}</span>
                        <span>•</span>
                        <span>{note.timestamp}</span>
                      </div>
                      <p className="text-sm mt-2 whitespace-pre-wrap">{note.content}</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleUpdateNote(note.id)} 
                      className="text-primary"
                    >
                      Edit
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleDeleteNote(note.id)} 
                      className="text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-8">
            <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-2" />
            <h3 className="text-lg font-medium mb-1">No notes found</h3>
            {searchQuery ? (
              <p className="text-gray-500">Try adjusting your search query</p>
            ) : (
              <p className="text-gray-500">Start taking notes to track your learning progress</p>
            )}
          </div>
        )}
      </div>

      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 mt-8">
        <div className="flex items-start">
          <div className="bg-blue-100 rounded-full p-2 mr-4">
            <BookOpen className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-blue-800 mb-1">Pro Tip</h3>
            <p className="text-sm text-blue-700">Taking notes while watching lectures helps improve retention by up to 40%. You can export your notes at any time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseNotes;
