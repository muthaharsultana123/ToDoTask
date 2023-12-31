import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input} from "@nextui-org/react";


export const NavBar = ({ selectProject,selectedProject, setSelectedProject, newProjectName, setNewProjectName, projects, setProjects, addProject}) => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
   <>
     <div className='lg:flex flex-col w-full hidden'>
        <div className='flex-row w-full border-b-2 p-4'>
          My Project
        </div>
        
    </div>

    <Navbar className='xl:hidden' >
      <NavbarContent>
      <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          My Projects
        </NavbarBrand>
      </NavbarContent>
      <NavbarMenu>
        {
          projects.map((project, index) => (
            <NavbarMenuItem key={index} onClick={() => selectProject(index) } >
          {
            project.name
          }
        </NavbarMenuItem>
          ))
        }
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
      </NavbarMenu>

    </Navbar>

   </>
    
  )
}
