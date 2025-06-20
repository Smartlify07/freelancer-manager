import type { Project, SupabaseFetchResult } from '@/types';
import type { User } from '@supabase/supabase-js';
import { createData, fetchData } from './call-api';

export const fetchProjects = async (
  user_id: string,
  client_id?: string
): Promise<SupabaseFetchResult<Project[]>> => {
  let filters: {
    user_id: string;
    client_id?: string;
  } = {
    user_id,
  };
  if (client_id) {
    filters = { ...filters, client_id };
  }
  return fetchData({
    table: 'projects',
    joins: ['tasks', 'clients'],
    filters,
    single: false,
    order: true,
  });
};

export const fetchProjectById = async (
  id: string,
  user_id: string
): Promise<SupabaseFetchResult<Project>> => {
  return await fetchData({
    table: 'projects',
    joins: ['tasks', 'clients'],
    filters: {
      user_id,
      id,
    },
    single: true,
  });
};

export const createProject = async (
  projectData: Omit<Project, 'id' | 'milestones' | 'tasks' | 'clients'>,
  user_id: User['id']
) => {
  return createData('projects', projectData, user_id);
};
