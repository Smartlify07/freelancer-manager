import type { Project } from '@/types';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';
import type { User } from '@supabase/supabase-js';
import { MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { format } from 'date-fns';
import { useNavigate } from '@tanstack/react-router';

export const ProjectsTable = ({
  projects,
}: {
  projects: Project[];
  user_id: User['id'];
}) => {
  const tableHeadClassName = 'text-neutral-600 font-normal text-sm';
  const router = useNavigate();

  return (
    <Table>
      <TableCaption>A list of your projects</TableCaption>
      <TableHeader>
        <TableRow className="bg-neutral-50">
          <TableHead className={tableHeadClassName}>Project Names</TableHead>
          <TableHead className={tableHeadClassName}>Client</TableHead>
          <TableHead className={tableHeadClassName}>Project Status</TableHead>
          <TableHead className={tableHeadClassName}>Due Date</TableHead>
          <TableHead className={tableHeadClassName}>Invoice Status</TableHead>
          <TableHead className={tableHeadClassName}></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow className="text-primary text-sm" key={project.id}>
            <TableCell>
              <h1>{project.name}</h1>
            </TableCell>
            <TableCell>{project.clients?.name}</TableCell>
            <TableCell className={'flex justify-start items-center'}>
              <Badge
                className={cn(
                  'capitalize',
                  project.status === 'completed' &&
                    'text-green-600 bg-green-600/20',
                  project.status === 'on_hold' && 'text-red-600 bg-red-600/20',
                  project.status === 'active' && 'text-blue-600 bg-blue-600/20'
                )}
              >
                {project.status}
              </Badge>
            </TableCell>
            <TableCell>{format(project.end_date, 'PPP')}</TableCell>
            <TableCell>Not paid</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="font-inter" align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      router({ to: `/projects/$${project.id}` });
                    }}
                  >
                    Edit Project
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
