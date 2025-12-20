import { File, X, FileText, Image as ImageIcon, ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileListProps {
  files: File[];
  onRemove: (index: number) => void;
  onReorder?: (fromIndex: number, toIndex: number) => void;
  showReorder?: boolean;
}

const FileList = ({ files, onRemove, onReorder, showReorder = false }: FileListProps) => {
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const getFileIcon = (fileName: string) => {
    const ext = fileName.split(".").pop()?.toLowerCase();
    if (["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(ext || "")) {
      return ImageIcon;
    }
    if (ext === "pdf") {
      return FileText;
    }
    return File;
  };

  if (files.length === 0) return null;

  return (
    <div className="space-y-3 mt-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">
          Selected Files ({files.length})
        </h3>
        <span className="text-xs text-muted-foreground">
          Total: {formatFileSize(files.reduce((acc, f) => acc + f.size, 0))}
        </span>
      </div>

      <div className="space-y-2">
        {files.map((file, index) => {
          const Icon = getFileIcon(file.name);
          return (
            <div
              key={`${file.name}-${index}`}
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border group animate-scale-in"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {file.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatFileSize(file.size)}
                </p>
              </div>

              {showReorder && files.length > 1 && (
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => index > 0 && onReorder?.(index, index - 1)}
                    disabled={index === 0}
                    className="p-1.5 rounded-md hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Move up"
                  >
                    <ArrowUp className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <button
                    onClick={() => index < files.length - 1 && onReorder?.(index, index + 1)}
                    disabled={index === files.length - 1}
                    className="p-1.5 rounded-md hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Move down"
                  >
                    <ArrowDown className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              )}

              <button
                onClick={() => onRemove(index)}
                className="p-1.5 rounded-md hover:bg-destructive/10 transition-colors"
                title="Remove file"
              >
                <X className="w-4 h-4 text-muted-foreground hover:text-destructive" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FileList;
