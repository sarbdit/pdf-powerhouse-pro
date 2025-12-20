import { useCallback, useState } from "react";
import { Upload, X, File, Image as ImageIcon, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploadZoneProps {
  onFilesSelected: (files: File[]) => void;
  acceptedTypes?: string;
  maxFiles?: number;
  maxSizeMB?: number;
  multiple?: boolean;
  label?: string;
  description?: string;
}

const FileUploadZone = ({
  onFilesSelected,
  acceptedTypes = ".pdf",
  maxFiles = 10,
  maxSizeMB = 100,
  multiple = true,
  label = "Drop PDF files here or click to browse",
  description = "Maximum file size: 100MB",
}: FileUploadZoneProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateFiles = useCallback(
    (files: File[]) => {
      const validFiles: File[] = [];

      for (const file of files) {
        // Check file size
        if (file.size > maxSizeMB * 1024 * 1024) {
          setError(`File "${file.name}" exceeds ${maxSizeMB}MB limit`);
          continue;
        }

        // Check file type
        const extension = `.${file.name.split(".").pop()?.toLowerCase()}`;
        const acceptedExtensions = acceptedTypes.split(",").map((t) => t.trim().toLowerCase());

        if (!acceptedExtensions.includes(extension) && acceptedTypes !== "*") {
          setError(`File "${file.name}" is not a supported format`);
          continue;
        }

        validFiles.push(file);
      }

      if (validFiles.length > maxFiles) {
        setError(`Maximum ${maxFiles} files allowed`);
        return validFiles.slice(0, maxFiles);
      }

      return validFiles;
    },
    [acceptedTypes, maxFiles, maxSizeMB]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      setError(null);

      const files = Array.from(e.dataTransfer.files);
      const validFiles = validateFiles(files);

      if (validFiles.length > 0) {
        onFilesSelected(validFiles);
      }
    },
    [onFilesSelected, validateFiles]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setError(null);
      const files = Array.from(e.target.files || []);
      const validFiles = validateFiles(files);

      if (validFiles.length > 0) {
        onFilesSelected(validFiles);
      }

      // Reset input
      e.target.value = "";
    },
    [onFilesSelected, validateFiles]
  );

  return (
    <div className="w-full">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={cn("upload-zone cursor-pointer", isDragging && "drag-over")}
      >
        <input
          type="file"
          accept={acceptedTypes}
          multiple={multiple}
          onChange={handleFileInput}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer block">
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
              <Upload className="w-8 h-8 text-primary" />
            </div>
            <p className="text-lg font-semibold text-foreground mb-2">{label}</p>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </label>
      </div>

      {error && (
        <div className="flex items-center gap-2 mt-4 p-4 rounded-lg bg-destructive/10 text-destructive">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">{error}</p>
        </div>
      )}
    </div>
  );
};

export default FileUploadZone;
