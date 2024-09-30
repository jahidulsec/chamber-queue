"use client";

import React, { FormEvent, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { wait } from "@/lib/utils";
import Spinner from "../ui/spinner";
import { toast } from "sonner";

type AppointmentFormProps = {
  data?: any;
  onClose: () => void;
};

function AppointmentForm({ data, onClose }: AppointmentFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await wait(2500);
    setIsLoading(false);
    if (data) {
      toast.success("Appointment is updated");
    } else {
      toast.success("New appointment is created");
    }
    onClose();
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="inputs flex flex-col gap-3">
        <p>
          <Label htmlFor="queue_number">Queue Number</Label>
          <Input
            type="number"
            id="queue_number"
            className="mt-2"
            defaultValue={data && data.id}
          />
        </p>
        <p>
          <Label htmlFor="patient_name">Patient&apos;s Name</Label>
          <Input
            type="text"
            id="patient_name"
            className="mt-2"
            defaultValue={data && data.name}
          />
        </p>
      </div>
      <Button disabled={isLoading}>
        {isLoading ? (
          <>
            <Spinner color="white" size={4} />{" "}
            <span className="ml-2">Submitting</span>
          </>
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
}

export default AppointmentForm;
