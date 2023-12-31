import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import { NavBar } from './components/Navbar'
import Home from './components/Home'

const App = () => {


  const [projects, setProjects] = useState(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    return storedProjects;
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [newProjectName, setNewProjectName] = useState('');
  const [newTask, setNewTask] = useState({
    taskName: '',
    startDate: '',
    endDate: '',
    status: 'todo',
  });

  const [editMode, setEditMode] = useState(false);
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const addProject = () => {
    if (newProjectName.trim() !== '') {
      const newProjects = [...projects, { name: newProjectName, todos: [] }];
      setProjects(newProjects);
      setNewProjectName('');
    }
  };

  const addTodo = () => {
    if (selectedProject === null) {
      alert("Please select a project first.");
      return;
    }

    const newProjects = [...projects];
    if (editMode) {
      newProjects[selectedProject].todos[editingTaskIndex] = { ...newTask };
      setEditMode(false);
    } else {
      newProjects[selectedProject].todos.push({ ...newTask });
    }
    setProjects(newProjects);
    setNewTask({
      taskName: '',
      startDate: '',
      endDate: '',
      status: 'todo',
    });
  };

  

  const editTodo = (index) => {
    console.log("clicked", index);
  };

  const selectProject = (index) => {
    setSelectedProject(index);
    setEditMode(false);
  }

  return (
    <div className='flex h-screen'>
      <Sidebar  
        selectProject={selectProject} 
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        newProjectName={newProjectName} 
        setNewProjectName={setNewProjectName} 
        projects={projects} setProjects={setProjects} 
        addProject={addProject} 

        />
      <div className='flex-col w-full' >
        <NavBar
          selectProject={selectProject} 
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        newProjectName={newProjectName} 
        setNewProjectName={setNewProjectName} 
        projects={projects} setProjects={setProjects} 
        addProject={addProject}
        />
        <Home editMode={editMode} setEditMode={setEditMode} editTodo={editTodo} editingTaskIndex={editingTaskIndex} setEditingTaskIndex={setEditingTaskIndex} addTodo={addTodo} newTask={newTask} setNewTask={setNewTask} projects={projects} setProjects={setProjects} selectedProject={selectedProject} />
      </div>
    </div>
  )
}

export default App

