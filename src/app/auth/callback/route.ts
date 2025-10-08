import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  console.log('Auth callback hit!')
  
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const error = requestUrl.searchParams.get('error')
  const errorDescription = requestUrl.searchParams.get('error_description')
  
  console.log('Callback params:', { code, error, errorDescription })
  
  // If there's an error from Supabase, redirect to sign-in with error
  if (error) {
    console.error('Supabase auth error:', error, errorDescription)
    return NextResponse.redirect(new URL(`/sign-in?error=${error}&description=${errorDescription || ''}`, request.url))
  }
  
  // For now, just redirect to home - let the client handle the auth
  return NextResponse.redirect(new URL('/', request.url))
}