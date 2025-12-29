export const Container = ({ children }) => {
    return(
        <div className="min-h-screen bg-linear-to-b from-background-primary to-background-secondary py-10 px-4 flex flex-col gap-10">
            {children}
        </div>
    )
}