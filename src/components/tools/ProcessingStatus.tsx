import { Loader2, Check, AlertCircle } from "lucide-react";

interface ProcessingStatusProps {
  status: "idle" | "processing" | "success" | "error";
  progress?: number;
  message?: string;
}

const ProcessingStatus = ({ status, progress = 0, message }: ProcessingStatusProps) => {
  if (status === "idle") return null;

  return (
    <div className="mt-6 p-4 rounded-xl border border-border bg-card animate-fade-in">
      {status === "processing" && (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Loader2 className="w-5 h-5 text-primary animate-spin" />
            <span className="text-sm font-medium text-foreground">
              {message || "Processing your files..."}
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground text-right">{progress}% complete</p>
        </div>
      )}

      {status === "success" && (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
            <Check className="w-5 h-5 text-success" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">
              {message || "Processing complete!"}
            </p>
            <p className="text-xs text-muted-foreground">
              Your file is ready for download
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
            <AlertCircle className="w-5 h-5 text-destructive" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">
              {message || "An error occurred"}
            </p>
            <p className="text-xs text-muted-foreground">
              Please try again or contact support
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessingStatus;
