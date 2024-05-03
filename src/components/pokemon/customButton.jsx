import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const getNextId = (id) => {
    if (id < 1000) return String(id + 1).padStart(3, '0');
    else return '001'; // Wrap around to the first Pokemon if it's the last one
};

const getPrevId = (id) => {
    if (id > 1) return String(id - 1).padStart(3, '0');
    else return '1000'; // Wrap around to the last Pokemon if it's the first one
};

const NextButton = () => {
    const pathname = usePathname();
    const id = parseInt(pathname.split("/")[2]); // Convert ID to number

    return (
        <Link className="my-auto" href={`/pokemon/${getNextId(id)}/details`}>
            <Button>
                Next
            </Button>
        </Link>
    );
}

const PrevButton = () => {
    const pathname = usePathname();
    const id = parseInt(pathname.split("/")[2]); // Convert ID to number

    return (
        <Link className="my-auto" href={`/pokemon/${getPrevId(id)}/details`}>
            <Button>
                Previous
            </Button>
        </Link>
    );
}

export { NextButton, PrevButton };
