#!/bin/bash

# PDF to Markdown Converter - Environment Setup Script
# This script sets up the Python environment and installs required dependencies

echo "🚀 Setting up PDF to Markdown Converter environment..."

# Check if Rust is installed
if ! command -v rustc &> /dev/null; then
    echo "🦀 Rust not found. Installing Rust..."
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
    source $HOME/.cargo/env
else
    echo "✅ Rust is already installed"
fi

# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo "📦 Creating Python virtual environment..."
    python3 -m venv venv
else
    echo "✅ Virtual environment already exists"
fi

# Activate virtual environment
echo "🔧 Activating virtual environment..."
source venv/bin/activate

# Upgrade pip
echo "⬆️  Upgrading pip..."
pip install --upgrade pip

# Install maturin (required for pdf-inspector)
echo "🔨 Installing maturin..."
pip install maturin

# Install pdf-inspector from Firecrawl
echo "📄 Installing pdf-inspector..."
pip install pdf-inspector

# Install Flask
echo "🌐 Installing Flask..."
pip install flask

echo "✨ Environment setup complete!"
echo "📝 To activate the environment, run: source venv/bin/activate"
echo "🚀 To start the server, run: python app.py"
