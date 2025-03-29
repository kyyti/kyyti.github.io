const Steps = () => {
    return(
        <section className="p-6 bg-[var(--primary-color)] text-[var(--text-color)]">
	<div className="container mx-auto">
		<span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase text-[var(--accent-color)]">How it works</span>
		<h2 className="text-5xl font-bold text-center text-[var(--text-color)]">Building with Mamba is simple</h2>
		<div className="grid gap-6 my-16 lg:grid-cols-3">
			<div className="flex flex-col p-8 space-y-4 rounded-md bg-[var(--secondary-color)] text-[var(--text-color)]">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-[var(--accent-color)] text-[var(--button-text-color)]">1</div>
				<p className="text-2xl font-semibold">
					<b>Nulla.</b>Nostrum, corrupti blanditiis. Illum, architecto?
				</p>
			</div>
			<div className="flex flex-col p-8 space-y-4 rounded-md bg-[var(--secondary-color)] text-[var(--text-color)]">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-[var(--accent-color)] text-[var(--button-text-color)]">2</div>
				<p className="text-2xl font-semibold">
					<b>Accusantium.</b>Vitae saepe atque neque sunt eius dolor veniam alias debitis?
				</p>
			</div>
			<div className="flex flex-col p-8 space-y-4 rounded-md bg-[var(--secondary-color)] text-[var(--text-color)]">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-[var(--accent-color)] text-[var(--button-text-color)]">3</div>
				<p className="text-2xl font-semibold">
					<b>Maxime.</b>Expedita temporibus culpa reprehenderit doloribus consectetur odio!
				</p>
			</div>
		</div>
	</div>
</section>
    )
}

export default Steps