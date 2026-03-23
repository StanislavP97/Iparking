import { useI18n } from "@/lib/i18n";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface HelpPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const HelpPopup = ({ open, onOpenChange }: HelpPopupProps) => {
  const { t } = useI18n();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onOpenChange(false);
      toast.success(t("help.success"));
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-border bg-card sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">{t("help.title")}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input placeholder={t("help.name")} required className="bg-background" />
          <Input placeholder={t("help.email")} type="email" required className="bg-background" />
          <Input placeholder={t("help.phone")} type="tel" className="bg-background" />
          <Textarea placeholder={t("help.message")} required className="bg-background" rows={4} />
          <p className="text-xs text-muted-foreground">{t("help.consent")}</p>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "..." : t("help.submit")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default HelpPopup;
