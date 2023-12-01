import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./Button";
import { InputField } from "./InputField";
import { Toggle } from "./Toggle";

type EmployeeFormData = {
    name: string;
    email: string;
    status: boolean;
};

export const EmployeeForm = () => {

    const [employeeData, setEmployeeData] = useState<EmployeeFormData>({
        name: '',
        email: '',
        status: false,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEmployeeData((prev) => ({ ...prev, [name]: value }))
    }

    const handleToggle = (status: boolean) => {
        setEmployeeData((prev) => ({ ...prev, status }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

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
        />
        <div className="block w-full">
          <Toggle label="Status" checked={employeeData.status} onChange={handleToggle}/>
        </div>
        <div className="flex justify-end">
          <Button type="submit" text="Submit" />
        </div>
      </form>
    );
}