import { ChangeEvent, ReactNode, useRef } from 'react';

interface FileUpload {
  setFile: (file: File) => void;
  accept: string;
  children: ReactNode;
}

const FileUpload = (props: FileUpload) => {
  const ref = useRef<HTMLInputElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    props.setFile(e.target.files[0]);
  };

  return (
    <div onClick={() => ref.current?.click()}>
      <input
        type={'file'}
        accept={props.accept}
        style={{ display: 'none' }}
        ref={ref}
        onChange={onChange}
      />
      {props.children}
    </div>
  );
};

export { FileUpload };
