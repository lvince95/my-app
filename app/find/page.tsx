/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Z4wn7fArlKC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function FindComponent() {
  return (
    <div className="grid grid-cols-3 px-4 pb-12 gap-8">
      <div className="bg-card p-4 rounded-lg shadow">
        <h2 className="text-2xl font-semibold">Test</h2>
      </div>

      <div className="col-span-2 flex flex-col gap-4">
        <div className="bg-card p-4 rounded-lg shadow">Test</div>

        <div className="bg-card p-4 rounded-lg shadow">Test</div>
        <div className="bg-card p-4 rounded-lg shadow">Test</div>
        <div className="bg-card p-4 rounded-lg shadow">Test</div>
        <div className="bg-card p-4 rounded-lg shadow">Test</div>
        <div className="bg-card p-4 rounded-lg shadow">Test</div>
      </div>
    </div>
  );
}
