import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Minus, Plus, Trash2 } from 'lucide-react';

function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="container mx-auto py-20 text-center max-w-md">
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Handlekurv</CardTitle>
                <CardDescription>Handlekurven din er tom.</CardDescription>
            </CardHeader>
            <CardFooter className="justify-center pb-8">
                <Button asChild>
                    <Link to="/products">Fortsett å handle</Link>
                </Button>
            </CardFooter>
        </Card>
      </div>
    );
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(0);
  };

  return (
    <div className="container mx-auto py-10 max-w-5xl">
      <Card>
        <CardHeader>
            <CardTitle className="text-2xl">Handlekurv</CardTitle>
            <CardDescription>Se og administrer varene i handlekurven.</CardDescription>
        </CardHeader>
        <CardContent>
            {/* Desktop View */}
            <div className="hidden md:block">
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[40%]">Produkt</TableHead>
                    <TableHead>Pris</TableHead>
                    <TableHead className="text-center">Antall</TableHead>
                    <TableHead className="text-right">Sum</TableHead>
                    <TableHead className="text-right">Handlinger</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {cartItems.map(item => (
                    <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.product.name}</TableCell>
                        <TableCell>{Math.round(item.product.price)} kr</TableCell>
                        <TableCell>
                            <div className="flex items-center justify-center gap-2">
                                <Button 
                                    variant="outline" 
                                    size="icon" 
                                    className="h-8 w-8 bg-white text-black hover:bg-gray-300 transition-colors border-gray-300" 
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                >
                                    <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <Button 
                                    variant="outline" 
                                    size="icon" 
                                    className="h-8 w-8 bg-white text-black hover:bg-gray-300 transition-colors border-gray-300" 
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    disabled={item.quantity >= item.product.stock_quantity}
                                >
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                        </TableCell>
                        <TableCell className="text-right">{(item.product.price * item.quantity).toFixed(0)} kr</TableCell>
                        <TableCell className="text-right">
                            <Button 
                                variant="destructive" 
                                size="sm" 
                                onClick={() => removeFromCart(item.id)}
                            >
                                <Trash2 className="h-4 w-4 mr-2" /> Fjern
                            </Button>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex flex-col gap-4">
                {cartItems.map(item => (
                    <div key={item.id} className="border rounded-lg p-4 flex flex-col gap-3 bg-card text-card-foreground">
                        <div className="flex justify-between items-start">
                            <span className="font-medium text-lg">{item.product.name}</span>
                            <span className="font-semibold">{Math.round(item.product.price)} kr</span>
                        </div>
                        
                        <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-muted-foreground">Antall:</span>
                                <Button 
                                    variant="outline" 
                                    size="icon" 
                                    className="h-8 w-8 bg-white text-black hover:bg-gray-300 transition-colors border-gray-300" 
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                >
                                    <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-4 text-center">{item.quantity}</span>
                                <Button 
                                    variant="outline" 
                                    size="icon" 
                                    className="h-8 w-8 bg-white text-black hover:bg-gray-300 transition-colors border-gray-300" 
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    disabled={item.quantity >= item.product.stock_quantity}
                                >
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-2 pt-2 border-t">
                            <span className="font-bold">Sum: {(item.product.price * item.quantity).toFixed(0)} kr</span>
                            <Button 
                                variant="destructive" 
                                size="sm" 
                                onClick={() => removeFromCart(item.id)}
                            >
                                <Trash2 className="h-4 w-4 mr-2" /> Fjern
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between items-center bg-muted/50 p-6 rounded-b-lg">
            <div className="text-2xl font-bold mb-4 sm:mb-0">
                Total: {calculateTotal()} kr
            </div>
            <Button size="lg" asChild>
                <Link to="/checkout">Sjekk ut</Link>
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CartPage;
