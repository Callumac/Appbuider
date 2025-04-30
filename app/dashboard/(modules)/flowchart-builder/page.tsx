import dynamic from 'next/dynamic';

const ReactFlowWrapper = dynamic(
  () => import('@/components/ReactFlowWrapper'),
  { ssr: false, loading: () => <div>Loading flowchart editor...</div> }
);

export default function FlowchartBuilder() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Flowchart Builder</h2>
      <ReactFlowWrapper />
    </div>
  );
}
