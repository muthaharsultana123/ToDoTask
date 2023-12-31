import React, { useState } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";

const AddTask = ({bgcolor, textColor, addTodo, newTask, setNewTask, projects, setProjects}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();


  return (
    <>
      <Button fullWidth className={`bg-[${bgcolor}] text-[${textColor}] px-6`} onPress={onOpen}>Add Task</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl" >
        <ModalContent className='w-[1000px]' >
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add new task</ModalHeader>
              <ModalBody>
              <span>Name of the Task</span>
              <Input value={newTask.taskName} required onChange={(e) => setNewTask({ ...newTask, taskName: e.target.value })} type="text" placeholder='Text'className="" />
              <span className={`
                ${newTask.taskName &&  "hidden" } text-[#E92B2B] text-[12px]
              `} >Please fill the task name</span>
              <div className='flex justify-between gap-4' >
                <div className='w-full' >
                  <span>Start date</span>
                  <Input
                    type="date"
                    value={newTask.startDate}
                    required
                  onChange={(e) => setNewTask({ ...newTask, startDate: e.target.value })}
                    className="w-full"
                  />
                  <span className={`
                ${newTask.startDate &&  "hidden" } text-[#E92B2B] text-[12px]
              `} >Please fill the start date</span>
                </div>
                <div className='w-full' >
                <span>Deadline</span>
                <Input
                type="date"
                placeholder='Text'
                value={newTask.endDate}
                  onChange={(e) => setNewTask({ ...newTask, endDate: e.target.value })}
              />
              <span className={`
                ${newTask.endDate &&  "hidden" } text-[#E92B2B] text-[12px]
              `} >Please fill the deadline date</span>
                </div>
              </div>
              <span>Status</span>
                <Select
                  isRequired
                  value={newTask.status}
                  onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                  className="max-w-xs"
                >
                  <SelectItem value="todo">
                    To do
                  </SelectItem>
                  <SelectItem value="inprogress">
                    In Progress
                  </SelectItem>
                  <SelectItem value="inreview">
                    In Review
                  </SelectItem>
                  <SelectItem value="completed">
                    Completed
                  </SelectItem>
                </Select>
                <span className={`
                ${newTask.status &&  "hidden" } text-[#E92B2B] text-[12px]
              `} >Select the status</span>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onClick={addTodo} onPress={onClose}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddTask