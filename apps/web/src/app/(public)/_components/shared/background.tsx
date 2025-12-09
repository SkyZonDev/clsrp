export function Background() {
    return (
        <>
            {/* Base dark background */}
            <div className="fixed inset-0 bg-[#1c1c1c]" />

            {/* Subtle noise / dot grid */}
            <div
                className="fixed inset-0 pointer-events-none
        bg-[radial-gradient(circle,#F1EEEE20_1px,transparent_1px)]
        bg-[length:12px_12px]
        mask-[radial-gradient(ellipse_70%_70%_at_50%_50%,#000_35%,transparent_100%)]"
            />

            {/* Warm glow orbs */}
            <div className="fixed -top-32 left-1/4 w-[520px] h-[520px] bg-[#FFCC29]/25 rounded-full blur-[140px] pointer-events-none" />

            <div className="fixed top-1/3 -right-40 w-[560px] h-[560px] bg-[#F58634]/25 rounded-full blur-[160px] pointer-events-none" />

            <div className="fixed bottom-0 left-1/3 w-[420px] h-[420px] bg-[#FFCC29]/20 rounded-full blur-[140px] pointer-events-none" />
        </>
    );
}
