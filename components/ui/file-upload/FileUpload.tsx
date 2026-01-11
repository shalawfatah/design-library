import * as React from "react";
import { cn } from "@/lib/cn";

export interface FileUploadProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  multiple?: boolean;
  accept?: string;
  onFilesChange?: (files: File[]) => void;
  preview?: boolean;
}

export const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      label,
      multiple = false,
      accept,
      onFilesChange,
      preview = true,
      className,
      ...props
    },
    ref,
  ) => {
    const [files, setFiles] = React.useState<File[]>([]);
    const [dragActive, setDragActive] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const handleFiles = (selectedFiles: FileList) => {
      const newFiles = Array.from(selectedFiles);
      setFiles(newFiles);
      onFilesChange?.(newFiles);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setDragActive(true);
    };

    const handleDragLeave = () => setDragActive(false);

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setDragActive(false);
      if (e.dataTransfer.files) handleFiles(e.dataTransfer.files);
    };

    return (
      <div
        className={cn("flex flex-col space-y-2", className)}
        ref={ref}
        {...props}
      >
        <label className="font-medium">{label}</label>

        <div
          className={cn(
            "relative border-2 border-dashed rounded-md p-6 text-center cursor-pointer transition-colors",
            dragActive
              ? "border-primary bg-primary/10"
              : "border-muted hover:border-foreground",
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
        >
          <input
            type="file"
            multiple={multiple}
            accept={accept}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            ref={inputRef}
            onChange={(e) => e.target.files && handleFiles(e.target.files)}
          />

          <p className="text-sm text-muted-foreground">
            Drag & drop files here or click to select
          </p>
        </div>

        {preview && files.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mt-2">
            {files.map((file, i) => {
              const isImage = file.type.startsWith("image/");
              return (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center border rounded p-2 text-xs overflow-hidden"
                >
                  {isImage ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="h-16 w-16 object-cover rounded"
                    />
                  ) : (
                    <div className="h-16 w-16 flex items-center justify-center bg-muted rounded">
                      <span className="truncate">{file.name}</span>
                    </div>
                  )}
                  <span className="truncate mt-1">{file.name}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  },
);

FileUpload.displayName = "FileUpload";
