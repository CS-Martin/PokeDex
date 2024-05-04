import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const getNextId = (id) => {
    if (id < 1010) return String(id + 1).padStart(3, '0');
    else return '001'; 
};

const getPrevId = (id) => {
    if (id > 1) return String(id - 1).padStart(3, '0');
    else return '1010'; 
};

const NextButton = () => {
    const pathname = usePathname();
    const id = parseInt(pathname.split("/")[2]); 

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
    const id = parseInt(pathname.split("/")[2]); 

    return (
        <Link className="my-auto" href={`/pokemon/${getPrevId(id)}/details`}>
            <Button>
                Previous
            </Button>
        </Link>
    );
}

export { NextButton, PrevButton };
