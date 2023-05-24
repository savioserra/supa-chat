'use client';

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { Session } from '@supabase/supabase-js';
import { PropsWithChildren, useState } from 'react';

interface AuthProps {
  session: Session;
}

export default function Provider({ children, session }: PropsWithChildren<AuthProps>) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={session}>
      {children}
    </SessionContextProvider>
  );
}
