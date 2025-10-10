type ButtonGroupProps = {
  onReload: () => void;
  onTriggerError: () => void;
};

export function ButtonGroup({ onReload, onTriggerError }: ButtonGroupProps) {
  return (
    <div className='flex gap-4'>
      <button
        onClick={onReload}
        className='rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700'
      >
        Reload Component
      </button>
      <button
        onClick={onTriggerError}
        className='rounded bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700'
      >
        Trigger Error
      </button>
    </div>
  );
}
