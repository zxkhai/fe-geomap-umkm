export default function PageHeader({ title }: { title: string }) {
  return (
    <h1 className="text-xl font-semibold mb-4 text-black">{title}</h1>
  );
}
