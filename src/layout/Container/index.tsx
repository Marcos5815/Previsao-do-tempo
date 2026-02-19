export const Container = ({ children }: { children: React.ReactNode }) => {
    return(
        <div className="min-h-screen bg-linear-to-b from-background-primary to-background-secondary py-10 px-4 flex flex-col gap-10 items-center">
            {children}
        </div>
    )
}