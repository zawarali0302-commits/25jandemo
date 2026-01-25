import prisma from "@/lib/prisma"
import Link from "next/link";

interface DepartmentPageProps {
  params: Promise<{
    did: String
  }>
}
const DepartmentPage = async ({ params }: DepartmentPageProps) => {
  const { did } = await params;
  const employees = await prisma.employee.findMany(
    {
      where: {
        departmentId: +did
      }
    }
  );
  
  return (
    <div>
      <h1>Detail page of department {did} with employees</h1>
        {employees.map(employee => (
          <ul key={employee.id}>
            <li>{employee.name}</li>
            <Link href={`/departments/${did}/employees/${employee.id}`}>View</Link>
          </ul>
        ))}
        
    </div>
  )
}

export default DepartmentPage
