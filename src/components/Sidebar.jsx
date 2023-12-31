import React, { useEffect, useState } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";


const Sidebar = ({selectProject,selectedProject, setSelectedProject, newProjectName, setNewProjectName, projects, setProjects, addProject}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  
  return (
    <div className=' flex-col w-[240px] h-full border-r-2 hidden lg:flex'  >
        <div className='flex gap-2 w-full border-b-2 p-4' >
            <img src="./assets/logo.svg" alt='logo' />
            <p>Task boards</p>
        </div>
        {
          projects.length > 0 && (
            <div className='py-3 px-2 border-b-2' >
            {
              projects.map((project, index) => (
                <div key={index} onClick={() => selectProject(index) } className=' px-4 py-3 hover:bg-[#EBEEFC] rounded-lg' >{project.name}</div>
              ))
            }
        </div>
          )
        }
        <div className='py-3 px-2'>
        <>
      <Button onPress={onOpen}  className='text-[#3659E2]  px-4 py-3 hover:bg-[#EBEEFC] rounded-lg text-sm font-semibold'  >+  Add new Project</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Enter the project</ModalHeader>
              <ModalBody>
                <Input 
                   type='text'
                   required
                   placeholder='Enter the Project name'
                   value={newProjectName}
                   onChange={(e) => setNewProjectName(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose} onClick={() => {addProject()}} >
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
        </div>
    </div>
  )
}

export default Sidebar


