import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./Button";
import { InputField } from "./InputField";
import { Toggle } from "./Toggle";
import { EmployeeStatus } from "@/constants/employee.enum";
import { EmployeeData } from "@/interfaces/employee.interface";

type EmployeeForm = {
  onSubmit?: (callback: EmployeeData) => void;
  data: EmployeeData;
}

export const EmployeeForm = (props: EmployeeForm) => {

  const [employeeData, setEmployeeData] = useState<EmployeeData>(props.data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployeeData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = (toggleStatus: boolean) => {
    setEmployeeData((prev) => ({
      ...prev,
      status: toggleStatus ? EmployeeStatus.ACTIVE : EmployeeStatus.DEACTIVATED,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit && props.onSubmit(employeeData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-primary-700 p-10 rounded-lg space-y-5"
    >
      <InputField
        label="Name"
        name="name"
        onChange={handleChange}
        placeholder="name"
        required
        value={employeeData.name}
      />
      <InputField
        type="email"
        name="email"
        label="Email"
        onChange={handleChange}
        placeholder="johndoe@sample.com"
        required
        value={employeeData.email}
      />
      <div className="block w-full">
        <Toggle
          label="Status"
          checked={employeeData.status === EmployeeStatus.ACTIVE}
          onChange={handleToggle}
        />
      </div>
      <div className="flex justify-end">
        <Button type="submit" text="Submit" />
      </div>
    </form>
  );
};
