'use client'

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { DialogProps } from "@radix-ui/react-dialog";

type ModalProps = DialogProps & {
    icon: React.ReactNode;
    title: string
}

function Modal({children, title, icon, ...props}: ModalProps) {
  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {icon}{" "}
            <span>{title}</span>
          </DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
