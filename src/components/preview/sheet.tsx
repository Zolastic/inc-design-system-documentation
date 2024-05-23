import { Sheet, SheetContent, SheetTrigger, SheetClose } from "inc-design-system/sheet";

const SheetDemo = () => {
	<div className="flex flex-col items-center justify-start min-h-[100dvh]">
		<Sheet>
			<SheetTrigger>
				<h1>Open Sheet</h1>
			</SheetTrigger>
			<SheetContent>
				<h1>Hello World</h1>

				<SheetClose>
					Close Sheet
				</SheetClose>
			</SheetContent>
		</Sheet>
	</div>
}

export default SheetDemo;