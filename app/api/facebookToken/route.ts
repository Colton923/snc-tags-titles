import { NextResponse } from 'next/server'

export async function GET() {
  try {
    return NextResponse.json({ message: 'Hello World' })
  } catch (err) {
    console.log('err', err)
    return NextResponse.json({ message: 'Error' })
  }
}
