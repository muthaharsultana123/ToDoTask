import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import AddTask from "./AddTask";
import { useStateProvider } from "../context/StateProvider";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";

const Home = ({
  addTodo,
  newTask,
  setNewTask,
  projects,
  setProjects,
  selectedProject,
}) => {
  const [edit, setEdit] = useState(false);
  const [currentTodoData, setCurrentTodoData] = useState({
    index: "",
    selectedTask: "",
  });

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="lg:grid grid-cols-4 px-4 py-6 hidden">
      <div className="p-2 flex flex-col gap-5">
        <div className="bg-[#EBEEFC] text-[#3659E2] h-8 px-3 py-1 w-fit rounded-full text-xs flex justify-center items-center gap-2 ">
          <GoDotFill />
          To Do
        </div>
        {projects[selectedProject]?.todos.map(
          (todo, index) =>
            todo.status === "$.0" && (
              <div
                key={index}
                className="w-[270px] p-4 flex flex-col gap-3 rounded-xl shadow-[0px_0px_8px_0px_rgba(54,89,226,0.16)]"
              >
                <div className="text-[16px] font-semibold">{todo.taskName}</div>
                <div className="flex gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#777777]  text-[12px]">
                      Start date
                    </span>
                    <span className="px-2 bg-[#EBEEFC] text-[#3659E2] rounded-lg text-[12px]">
                      {todo.startDate}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[#777777]  text-[12px]">
                      Deadline
                    </span>
                    <span className="px-2 bg-[#EBEEFC] text-[#3659E2] rounded-lg text-[12px]">
                      {todo.endDate}
                    </span>
                  </div>
                </div>
                {/* {`${todo.taskName} - ${todo.startDate} to ${todo.endDate} (${todo.status})`} */}
              </div>
            )
        )}

        <AddTask
          addTodo={addTodo}
          newTask={newTask}
          setNewTask={setNewTask}
          projects={projects}
          setProjects={setProjects}
          bgcolor={"#EBEEFC"}
          textColor={"#3659E2"}
        />
      </div>
      <div className="p-2 flex flex-col gap-5 ">
        <div className="bg-[#FDF2FA] text-[#EE46BC] h-8 px-3 py-1 w-fit rounded-full text-xs flex justify-center items-center gap-2">
          <GoDotFill />
          In Progress
        </div>

        {projects[selectedProject]?.todos.map(
          (todo, index) =>
            todo.status === "$.1" && (
              <div
                key={index}
                className="w-[270px] p-4 flex flex-col gap-3 rounded-xl shadow-[0px_0px_8px_0px_rgba(54,89,226,0.16)]"
              >
                <div className="text-[16px] font-semibold">{todo.taskName}</div>
                <div className="flex gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#777777]  text-[12px]">
                      Start date
                    </span>
                    <span className="px-2 bg-[#EBEEFC] text-[#3659E2] rounded-lg text-[12px]">
                      {todo.startDate}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[#777777]  text-[12px]">
                      Deadline
                    </span>
                    <span className="px-2 bg-[#EBEEFC] text-[#3659E2] rounded-lg text-[12px]">
                      {todo.endDate}
                    </span>
                  </div>
                </div>
                {/* {`${todo.taskName} - ${todo.startDate} to ${todo.endDate} (${todo.status})`} */}
              </div>
            )
        )}

        <AddTask
          addTodo={addTodo}
          newTask={newTask}
          setNewTask={setNewTask}
          projects={projects}
          setProjects={setProjects}
          bgcolor={"#FDF2FA"}
          textColor={"#EE46BC"}
        />
      </div>
      <div className="p-2 flex flex-col gap-5">
        <div className="text-[#3FA1E3] bg-[#EFF8FF] h-8 px-3 py-1 w-fit rounded-full text-xs flex justify-center items-center gap-2">
          <GoDotFill />
          In review
        </div>
        {projects[selectedProject]?.todos.map(
          (todo, index) =>
            todo.status === "$.2" && (
              <div
                key={index}
                className="w-[270px] p-4 flex flex-col gap-3 rounded-xl shadow-[0px_0px_8px_0px_rgba(54,89,226,0.16)]"
              >
                <div className="text-[16px] font-semibold">{todo.taskName}</div>
                <div className="flex gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#777777]  text-[12px]">
                      Start date
                    </span>
                    <span className="px-2 bg-[#EBEEFC] text-[#3659E2] rounded-lg text-[12px]">
                      {todo.startDate}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[#777777]  text-[12px]">
                      Deadline
                    </span>
                    <span className="px-2 bg-[#EBEEFC] text-[#3659E2] rounded-lg text-[12px]">
                      {todo.endDate}
                    </span>
                  </div>
                </div>
                {/* {`${todo.taskName} - ${todo.startDate} to ${todo.endDate} (${todo.status})`} */}
              </div>
            )
        )}
        <AddTask
          addTodo={addTodo}
          newTask={newTask}
          setNewTask={setNewTask}
          projects={projects}
          setProjects={setProjects}
          bgcolor={"#EFF8FF"}
          textColor={"#3FA1E3"}
        />
      </div>
      <div className="p-2 flex flex-col gap-5">
        <div className="bg-[#E7F8E9] text-[#12BB23] h-8 px-3 py-1 w-fit rounded-full text-xs flex justify-center items-center gap-2">
          <GoDotFill />
          Completed
        </div>
        {projects[selectedProject]?.todos.map(
          (todo, index) =>
            todo.status === "$.3" && (
              <div
                key={index}
                className="w-[270px] p-4 flex flex-col gap-3 rounded-xl shadow-[0px_0px_8px_0px_rgba(54,89,226,0.16)]"
              >
                <div className="text-[16px] font-semibold">{todo.taskName}</div>
                <div className="flex gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#777777]  text-[12px]">
                      Start date
                    </span>
                    <span className="px-2 bg-[#EBEEFC] text-[#3659E2] rounded-lg text-[12px]">
                      {todo.startDate}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[#777777]  text-[12px]">
                      Deadline
                    </span>
                    <span className="px-2 bg-[#EBEEFC] text-[#3659E2] rounded-lg text-[12px]">
                      {todo.endDate}
                    </span>
                  </div>
                </div>
                {/* {`${todo.taskName} - ${todo.startDate} to ${todo.endDate} (${todo.status})`} */}
              </div>
            )
        )}
        <AddTask
          addTodo={addTodo}
          newTask={newTask}
          setNewTask={setNewTask}
          projects={projects}
          setProjects={setProjects}
          bgcolor={"#E7F8E9"}
          textColor={"#12BB23"}
        />
      </div>
    </div>
    <div className="flex w-full flex-col lg:hidden  items-center">
      <Tabs aria-label="Options " fullWidth={true} className="px-4 py-4" >
        <Tab key="todo" title="To do">

        <div className="flex flex-col gap-4" >
        {projects[selectedProject]?.todos.map(
          (todo, index) =>
            todo.status === "$.0" && (
              <div
                key={index}
                className="w-[350px] p-4 flex flex-col gap-3 rounded-xl shadow-[0px_0px_8px_0px_rgba(54,89,226,0.16)]"
              >
                <div className="text-[16px] font-semibold">{todo.taskName}</div>
                <div className="flex gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#777777]  text-[12px]">
                      Start date
                    </span>
                    <span className="px-2 bg-[#EBEEFC] text-[#3659E2] rounded-lg text-[12px]">
                      {todo.startDate}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[#777777]  text-[12px]">
                      Deadline
                    </span>
                    <span className="px-2 bg-[#EBEEFC] text-[#3659E2] rounded-lg text-[12px]">
                      {todo.endDate}
                    </span>
                  </div>
                </div>
                {/* {`${todo.taskName} - ${todo.startDate} to ${todo.endDate} (${todo.status})`} */}
              </div>
            )
        )}

        <AddTask
          addTodo={addTodo}
          newTask={newTask}
          setNewTask={setNewTask}
          projects={projects}
          setProjects={setProjects}
          bgcolor={"#EBEEFC"}
          textColor={"#3659E2"}
        />
        </div>
        </Tab>
        <Tab key="inprogress" title="In Progress">
        <div className="flex flex-col gap-4" >
        {projects[selectedProject]?.todos.map(
          (todo, index) =>
            todo.status === "$.1" && (
              <div
                key={index}
                className="w-[350px] p-4 flex flex-col gap-3 rounded-xl shadow-[0px_0px_8px_0px_rgba(54,89,226,0.16)]"
              >
                <div className="text-[16px] font-semibold">{todo.taskName}</div>
                <div className="flex gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#777777]  text-[12px]">
                      Start date
                    </span>
                    <span className="px-2 bg-[#EBEEFC] text-[#3659E2] rounded-lg text-[12px]">
                      {todo.startDate}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[#777777]  text-[12px]">
                      Deadline
                    </span>
                    <span className="px-2 bg-[#EBEEFC] text-[#3659E2] rounded-lg text-[12px]">
                      {todo.endDate}
                    </span>
                  </div>
                </div>
                {/* {`${todo.taskName} - ${todo.startDate} to ${todo.endDate} (${todo.status})`} */}
              </div>
            )
        )}
        <AddTask
          addTodo={addTodo}
          newTask={newTask}
          setNewTask={setNewTask}
          projects={projects}
          setProjects={setProjects}
          bgcolor={"#FDF2FA"}
          textColor={"#EE46BC"}
        />
        </div>
        </Tab>
        <Tab key="inreview" title="In review">
        <div  className="flex flex-col gap-4"  >
        {projects[selectedProject]?.todos.map(
          (todo, index) =>
            todo.status === "$.2" && (
              <div
                key={index}
                className="w-[350px] p-4 flex flex-col gap-3 rounded-xl shadow-[0px_0px_8px_0px_rgba(54,89,226,0.16)]"
              >
                <div className="text-[16px] font-semibold">{todo.taskName}</div>
                <div className="flex gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#777777]  text-[12px]">
                      Start date
                    </span>
                    <span className="px-2 bg-[#EBEEFC] text-[#3659E2] rounded-lg text-[12px]">
                      {todo.startDate}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[#777777]  text-[12px]">
                      Deadline
                    </span>
                    <span className="px-2 bg-[#EBEEFC] text-[#3659E2] rounded-lg text-[12px]">
                      {todo.endDate}
                    </span>
                  </div>
                </div>
                {/* {`${todo.taskName} - ${todo.startDate} to ${todo.endDate} (${todo.status})`} */}
              </div>
            )
        )}
        <AddTask
          addTodo={addTodo}
          newTask={newTask}
          setNewTask={setNewTask}
          projects={projects}
          setProjects={setProjects}
          bgcolor={"#EFF8FF"}
          textColor={"#3FA1E3"}
        />
        </div>
        </Tab>
        <Tab key="completed" title="Completed">
        <div  className="flex flex-col gap-4"  >
        {projects[selectedProject]?.todos.map(
          (todo, index) =>
            todo.status === "$.3" && (
              <div
                key={index}
                className="w-[350px] p-4 flex flex-col gap-3 rounded-xl shadow-[0px_0px_8px_0px_rgba(54,89,226,0.16)]"
              >
                <div className="text-[16px] font-semibold">{todo.taskName}</div>
                <div className="flex gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#777777]  text-[12px]">
                      Start date
                    </span>
                    <span className="px-2 bg-[#EBEEFC] text-[#3659E2] rounded-lg text-[12px]">
                      {todo.startDate}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[#777777]  text-[12px]">
                      Deadline
                    </span>
                    <span className="px-2 bg-[#EBEEFC] text-[#3659E2] rounded-lg text-[12px]">
                      {todo.endDate}
                    </span>
                  </div>
                </div>
                {/* {`${todo.taskName} - ${todo.startDate} to ${todo.endDate} (${todo.status})`} */}
              </div>
            )
        )}
        <AddTask
          addTodo={addTodo}
          newTask={newTask}
          setNewTask={setNewTask}
          projects={projects}
          setProjects={setProjects}
          bgcolor={"#E7F8E9"}
          textColor={"#12BB23"}
        />
        </div>
        </Tab>
      </Tabs>
    </div>  
    </>
    
  );
};

export default Home;
