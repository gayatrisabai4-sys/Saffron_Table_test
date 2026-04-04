import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X, Image as ImageIcon, IndianRupee, Tag, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { INITIAL_MENU, CATEGORIES, MenuItem, getImagePath, IMAGE_FALLBACKS } from '../data/menu';
import { cn } from '@/lib/utils';

export const Admin = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<Partial<MenuItem>>({});

  useEffect(() => {
    const savedMenu = localStorage.getItem('saffron_menu');
    if (savedMenu) {
      setMenuItems(JSON.parse(savedMenu));
    } else {
      setMenuItems(INITIAL_MENU);
      localStorage.setItem('saffron_menu', JSON.stringify(INITIAL_MENU));
    }
  }, []);

  const saveToLocalStorage = (items: MenuItem[]) => {
    setMenuItems(items);
    localStorage.setItem('saffron_menu', JSON.stringify(items));
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: MenuItem = {
      id: Date.now().toString(),
      name: formData.name || '',
      description: formData.description || '',
      price: Number(formData.price) || 0,
      category: formData.category || CATEGORIES[0],
    };
    const updatedMenu = [newItem, ...menuItems];
    saveToLocalStorage(updatedMenu);
    setIsAdding(false);
    setFormData({});
  };

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedMenu = menuItems.map(item => 
      item.id === isEditing ? { ...item, ...formData } : item
    );
    saveToLocalStorage(updatedMenu as MenuItem[]);
    setIsEditing(null);
    setFormData({});
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      const updatedMenu = menuItems.filter(item => item.id !== id);
      saveToLocalStorage(updatedMenu);
    }
  };

  const startEdit = (item: MenuItem) => {
    setIsEditing(item.id);
    setFormData(item);
  };

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">Admin Panel</h1>
          <p className="text-gray-500 text-lg">Manage your royal menu and delicacies.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <button 
            onClick={() => {
              if (window.confirm('Are you sure you want to reset the menu to defaults? All custom changes will be lost.')) {
                localStorage.removeItem('saffron_menu');
                setMenuItems(INITIAL_MENU);
              }
            }}
            className="px-8 py-4 rounded-2xl font-bold border-2 border-red-100 text-red-600 hover:bg-red-50 transition-all flex items-center gap-2 justify-center"
          >
            <Trash2 className="w-5 h-5" /> Reset Menu
          </button>
          <button 
            onClick={() => setIsAdding(true)}
            className="btn-primary flex items-center gap-2 py-4 px-8 justify-center"
          >
            <Plus className="w-6 h-6" /> Add New Dish
          </button>
        </div>
      </div>

      {/* Add/Edit Form Modal */}
      <AnimatePresence>
        {(isAdding || isEditing) && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-royal/60 backdrop-blur-sm"
              onClick={() => { setIsAdding(false); setIsEditing(null); setFormData({}); }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="p-8 md:p-10 space-y-6 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl md:text-3xl font-bold">{isAdding ? 'Add New Dish' : 'Edit Dish'}</h2>
                  <button 
                    onClick={() => { setIsAdding(false); setIsEditing(null); setFormData({}); }}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={isAdding ? handleAdd : handleEdit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-bold text-gray-700 flex items-center gap-2 text-sm">
                        <FileText className="w-4 h-4 text-saffron" /> Dish Name
                      </label>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. Butter Chicken"
                        className="w-full px-5 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-saffron/50 transition-all"
                        value={formData.name || ''}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-bold text-gray-700 flex items-center gap-2 text-sm">
                        <IndianRupee className="w-4 h-4 text-saffron" /> Price (₹)
                      </label>
                      <input 
                        required
                        type="number" 
                        placeholder="450"
                        className="w-full px-5 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-saffron/50 transition-all"
                        value={formData.price || ''}
                        onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-bold text-gray-700 flex items-center gap-2 text-sm">
                      <Tag className="w-4 h-4 text-saffron" /> Category
                    </label>
                    <select 
                      required
                      className="w-full px-5 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-saffron/50 transition-all"
                      value={formData.category || CATEGORIES[0]}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-bold text-gray-700 flex items-center gap-2 text-sm">
                      <FileText className="w-4 h-4 text-saffron" /> Description
                    </label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="Brief description of the dish..."
                      className="w-full px-5 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-saffron/50 transition-all resize-none"
                      value={formData.description || ''}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>

                  <div className="p-4 bg-gray-50 rounded-2xl space-y-2">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Image Preview</p>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-200">
                        <img 
                          src={formData.name ? getImagePath(formData.name) : IMAGE_FALLBACKS["default-food"]} 
                          alt="Preview"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = IMAGE_FALLBACKS["default-food"];
                          }}
                        />
                      </div>
                      <p className="text-xs text-gray-500 italic">
                        Image Path: {formData.name ? getImagePath(formData.name) : '/images/menu/...' }
                      </p>
                    </div>
                  </div>

                  <button type="submit" className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2">
                    <Save className="w-6 h-6" /> {isAdding ? 'Add Dish' : 'Save Changes'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Menu List */}
      <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="p-6 font-bold text-gray-700">Dish</th>
                <th className="p-6 font-bold text-gray-700">Category</th>
                <th className="p-6 font-bold text-gray-700">Price</th>
                <th className="p-6 font-bold text-gray-700 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {menuItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm shrink-0">
                        <img 
                          src={getImagePath(item.name)} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = IMAGE_FALLBACKS["default-food"];
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg group-hover:text-saffron transition-colors">{item.name}</h4>
                        <p className="text-gray-500 text-xs line-clamp-1 max-w-xs">{item.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="px-3 py-1 bg-saffron/10 text-saffron rounded-full text-xs font-bold">
                      {item.category}
                    </span>
                  </td>
                  <td className="p-6 font-bold">₹{item.price}</td>
                  <td className="p-6">
                    <div className="flex items-center justify-end gap-3">
                      <button 
                        onClick={() => startEdit(item)}
                        className="p-2 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl transition-all"
                        title="Edit"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(item.id)}
                        className="p-2 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white rounded-xl transition-all"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {menuItems.length === 0 && (
          <div className="p-20 text-center space-y-4">
            <p className="text-gray-500 text-lg">No dishes in the menu yet.</p>
            <button 
              onClick={() => setIsAdding(true)}
              className="btn-secondary"
            >
              Add Your First Dish
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
