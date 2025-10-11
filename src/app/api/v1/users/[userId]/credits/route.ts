import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params;
    
    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // For now, return mock credits data
    // In a real app, you'd fetch this from your database
    const mockCredits = Math.floor(Math.random() * 100) + 1; // Random credits between 1-100
    
    return NextResponse.json({ 
      credits: mockCredits,
      userId: userId 
    });
    
  } catch (error) {
    console.error('Error fetching user credits:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user credits' }, 
      { status: 500 }
    );
  }
}