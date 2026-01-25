import prisma from "@/lib/prisma";
import Link from "next/link";

const DepartmentsHomePage = async () => {
    const departments = await prisma.department.findMany();
    return (
        <div>
            {departments.map(department => (
                <ul key={department.id}>
                    <li>
                       <h1> {department.name} - {department.location}</h1>
                    </li>
                    <Link href={`/departments/${department.id}`}>View</Link>
                </ul>
            ))}
        </div>
    )
}

export default DepartmentsHomePage
