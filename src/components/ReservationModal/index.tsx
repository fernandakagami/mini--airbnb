import { Button } from "../ui/button";
import { DialogFooter, DialogHeader, Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog";
import { useState } from "react";
import { toast } from "sonner";

export function ReservationModal() {
  const [open, setOpen] = useState(false);
  
  const handleSubmit = (event: React.FormEvent) => {
   event.preventDefault();

    setOpen(false);
    toast.success("Reserva efetuada com sucesso!");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Reservar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md" aria-describedby="Modal para reservar uma acomodação">
        <DialogHeader>
          <DialogTitle>Reservar</DialogTitle>
          <DialogDescription>
            Tem certeza que deseja reservar esta acomodação?
          </DialogDescription>
        </DialogHeader>        
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button type="submit" onClick={handleSubmit}>Reservar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}