import ConditionalHeader from "./components/conditional-header";

export default function ConditionalRendering({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {

    return (
        <>
        <ConditionalHeader />
        { children }
        </>
    )
}